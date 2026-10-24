
"use client";

import { useEffect, useRef } from "react";
import Cube from "./Cube";

import type { ShelfItem } from "../../data/shelf";
import styles from "./Hero.module.scss";

type ItemViewerProps = {
  items: ShelfItem[];
  activeIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function ItemViewer({
  items,
  activeIndex,
  onChange,
  onClose,
}: ItemViewerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeItem = items[activeIndex];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onChange((activeIndex + 1) % items.length);
      }

      if (event.key === "ArrowLeft") {
        onChange(
          (activeIndex - 1 + items.length) % items.length
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeIndex, items.length, onChange, onClose]);

  if (!activeItem) return null;

  return (
    <div
      className={styles.viewerOverlay}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={styles.viewer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="item-viewer-title"
      >
        <button
          ref={closeButtonRef}
          className={styles.viewerClose}
          onClick={onClose}
          aria-label="Закрыть просмотр"
          type="button"
        >
          ×
        </button>

        <div className={styles.viewerContent}>
          <button
            className={styles.viewerArrow}
            type="button"
            onClick={() =>
              onChange(
                (activeIndex - 1 + items.length) %
                  items.length
              )
            }
            aria-label="Предыдущий предмет"
          >
            ←
          </button>

          <div className={styles.viewerItem}>
            {activeItem.type === "cube" &&
              activeItem.color && (
                <Cube
                  key={activeItem.id}
                  color={activeItem.color}
                  interactive
                />
              )}

            {activeItem.type === "eye" && (
              <span className={styles.viewerPlaceholder}>
                ◉
              </span>
            )}

            {activeItem.type === "unknown" && (
              <span className={styles.viewerPlaceholder}>
                ?
              </span>
            )}
          </div>

          <button
            className={styles.viewerArrow}
            type="button"
            onClick={() =>
              onChange((activeIndex + 1) % items.length)
            }
            aria-label="Следующий предмет"
          >
            →
          </button>
        </div>

        <div className={styles.viewerInfo}>
          <h2 id="item-viewer-title">
            {activeItem.id}
          </h2>
          <p>
            {activeIndex + 1} / {items.length}
          </p>
        </div>
      </div>
    </div>
  );
}
