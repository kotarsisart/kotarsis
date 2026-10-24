
"use client";

import { useRef, useState } from "react";
import type { PointerEvent } from "react";

import styles from "./Hero.module.scss";

type CubeProps = {
  color: "blue" | "purple";
  interactive?: boolean;
};

export default function Cube({
  color,
  interactive = false,
}: CubeProps) {
  const [rotation, setRotation] = useState({
    x: -20,
    y: 35,
  });

  const drag = useRef<{
    x: number;
    y: number;
  } | null>(null);

  function handlePointerDown(
    event: PointerEvent<HTMLDivElement>
  ) {
    if (!interactive) return;

    drag.current = {
      x: event.clientX,
      y: event.clientY,
    };

    event.currentTarget.setPointerCapture(
      event.pointerId
    );
  }

  function handlePointerMove(
    event: PointerEvent<HTMLDivElement>
  ) {
    if (!interactive || !drag.current) return;

    const dx = event.clientX - drag.current.x;
    const dy = event.clientY - drag.current.y;

    setRotation((current) => ({
      x: current.x - dy * 0.5,
      y: current.y + dx * 0.5,
    }));

    drag.current = {
      x: event.clientX,
      y: event.clientY,
    };
  }

  function handlePointerUp() {
    drag.current = null;
  }

  return (
    <div
      className={`${styles.cubeScene} ${
        interactive ? styles.interactiveScene : ""
      }`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        className={[
          styles.cube,
          color === "blue"
            ? styles.blueCube
            : styles.purpleCube,
          interactive ? styles.manualCube : "",
        ].join(" ")}
        style={
          interactive
            ? {
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              }
            : undefined
        }
      >
        {[
          "front",
          "back",
          "right",
          "left",
          "top",
          "bottom",
        ].map((face) => (
          <div
            key={face}
            className={`${styles.cubeFace} ${styles[face]}`}
          />
        ))}
      </div>
    </div>
  );
}
