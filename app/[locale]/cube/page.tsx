"use client";

import { useEffect, useState } from "react";

import "./cube.scss";

export default function CubePage() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      switch (e.key.toLowerCase()) {
        case "w":
          setX((v) => v + 90);
          break;

        case "s":
          setX((v) => v - 90);
          break;

        case "a":
          setY((v) => v - 90);
          break;

        case "d":
          setY((v) => v + 90);
          break;
      }
    }

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="scene">
      <div
        className="world"
        style={{
          transform: `
            rotateX(${x}deg)
            rotateY(${y}deg)
          `,
        }}
      >
        <section className="face front">
          FRONT
        </section>

        <section className="face back">
          BACK
        </section>

        <section className="face left">
          LEFT
        </section>

        <section className="face right">
          RIGHT
        </section>

        <section className="face top">
          TOP
        </section>

        <section className="face bottom">
          BOTTOM
        </section>
      </div>
    </main>
  );
}