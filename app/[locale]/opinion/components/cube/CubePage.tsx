
"use client";

import { useEffect, useRef, useState } from "react";
import "./cube.scss";

type Face =
  | "front"
  | "bottom"
  | "back"
  | "top"
  | "left"
  | "right";

type Key = "w" | "a" | "s" | "d";

const routes: Record<Face, Partial<Record<Key, Face>>> = {
  front: { s: "bottom", w: "top" },

  bottom: {
    w: "front",
    s: "back",
    a: "left",
    d: "right",
  },

  back: { w: "bottom", s: "top" },

  top: { w: "back", s: "front" },

  left: { d: "bottom" },

  right: { a: "bottom" },
};

const labels: Face[] = [
  "front",
  "back",
  "left",
  "right",
  "top",
  "bottom",
];

type Rotation = {
  x: number;
  y: number;
  z: number;
};

export default function CubePage() {
  const [face, setFace] = useState<Face>("front");

  const [rotation, setRotation] = useState<Rotation>({
    x: 0,
    y: 0,
    z: 0,
  });

  const locked = useRef(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const key = e.key.toLowerCase() as Key;

      if (!["w", "a", "s", "d"].includes(key)) return;
      if (e.repeat || locked.current) return;

      const next = routes[face][key];
      if (!next) return;

      locked.current = true;

      setFace(next);

      setRotation((current) => {
        switch (key) {
          case "w":
            return {
              ...current,
              x: current.x - 90,
            };

          case "s":
            return {
              ...current,
              x: current.x + 90,
            };

          case "a":
            return {
              ...current,
              z: current.z - 90,
            };

          case "d":
            return {
              ...current,
              z: current.z + 90,
            };
        }
      });
    }

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [face]);

  return (
    <main className="scene">
      <div
        className="cube"
        style={{
          transform: `
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
            rotateZ(${rotation.z}deg)
          `,
        }}
        onTransitionEnd={(e) => {
          if (
            e.target === e.currentTarget &&
            e.propertyName === "transform"
          ) {
            locked.current = false;
          }
        }}
      >
        {labels.map((name) => (
          <section key={name} className={`face ${name}`}>
            <div className="face-content">
              {name.toUpperCase()}
            </div>
          </section>
        ))}
      </div>

      <div className="debug">
        <div>FACE: {face.toUpperCase()}</div>
        <div>W A S D — navigation</div>
        <div>
          X: {rotation.x}° Y: {rotation.y}°
        </div>
      </div>
    </main>
  );
}
