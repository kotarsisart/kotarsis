
import { useEffect } from "react";

import {
  keyboardDirections,
  SWIPE_THRESHOLD,
} from "../cube.config";

import type { Direction } from "../cube.types";

export function useCubeControls(
  navigate: (direction: Direction) => void
) {
  // WASD + стрелки
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.repeat) return;

      const target = e.target;

      if (
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(
            target.tagName
          ))
      ) {
        return;
      }

      const direction =
        keyboardDirections[e.key.toLowerCase()];

      if (!direction) return;

      e.preventDefault();
      navigate(direction);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  // Мышь + сенсорный экран
  useEffect(() => {
    let start:
      | { id: number; x: number; y: number }
      | null = null;

    function handlePointerDown(e: PointerEvent) {
      if (e.pointerType === "mouse" && e.button !== 0) {
        return;
      }

      const target = e.target;

      if (
        target instanceof Element &&
        target.closest(
          "button, a, input, textarea, select, [contenteditable]"
        )
      ) {
        return;
      }

      start = {
        id: e.pointerId,
        x: e.clientX,
        y: e.clientY,
      };
    }

    function handlePointerUp(e: PointerEvent) {
      if (!start || start.id !== e.pointerId) return;

      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;

      start = null;

      if (Math.hypot(dx, dy) < SWIPE_THRESHOLD) {
        return;
      }

      const direction: Direction =
        Math.abs(dx) > Math.abs(dy)
          ? dx < 0
            ? "d"
            : "a"
          : dy < 0
            ? "s"
            : "w";

      navigate(direction);
    }

    function handlePointerCancel() {
      start = null;
    }

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerCancel);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener(
        "pointercancel",
        handlePointerCancel
      );
    };
  }, [navigate]);
}
