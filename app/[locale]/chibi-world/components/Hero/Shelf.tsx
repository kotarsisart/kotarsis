
"use client";

import { useState } from "react";

import Cube from "./Cube";
import ItemViewer from "./ItemViewer";

import { shelfItems } from "../../data/shelf";
import styles from "./Hero.module.scss";

export default function Shelf() {
  const [size, setSize] = useState<3 | 4 | 5>(3);
  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null);

  const slots = Array.from(
    { length: size * size },
    (_, index) => index + 1
  );

  return (
    <div className={styles.shelf}>
      <div className={styles.shelfHeader}>
        <span>kotarsis&apos; chibi world</span>

        <div className={styles.sizeControls}>
          {([3, 4, 5] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setSize(value)}
              className={
                size === value ? styles.activeSize : ""
              }
              aria-pressed={size === value}
            >
              {value}×{value}
            </button>
          ))}
        </div>
      </div>

      <div
        className={styles.shelfGrid}
        style={{
          gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
        }}
      >
        {slots.map((slot) => {
          const index = shelfItems.findIndex(
            (item) => item.slot === slot
          );

          const item =
            index >= 0 ? shelfItems[index] : null;

          return (
            <div key={slot} className={styles.shelfCell}>
              {item && (
                <button
                  className={styles.shelfItemButton}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Открыть ${item.id}`}
                >
                  {item.type === "cube" &&
                    item.color && (
                      <Cube color={item.color} />
                    )}

                  {item.type === "eye" && (
                    <span className={styles.placeholder}>
                      ◉
                    </span>
                  )}

                  {item.type === "unknown" && (
                    <span className={styles.placeholder}>
                      ?
                    </span>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {activeIndex !== null && (
        <ItemViewer
          items={shelfItems}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </div>
  );
}
