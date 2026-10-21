
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

type Transition = {
  from: Face;
  to: Face;
  key: Key;
};

const colors: Record<Face, string> = {
  front: "#e83e75",
  bottom: "#884ed2",
  back: "#333333",
  top: "#d98b29",
  left: "#3668db",
  right: "#2aab78",
};

export default function CubePage() {
  const [face, setFace] = useState<Face>("front");
  const [transition, setTransition] =
    useState<Transition | null>(null);

  const [active, setActive] = useState(false);
  const locked = useRef(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const key = e.key.toLowerCase() as Key;

      if (!["w", "a", "s", "d"].includes(key)) return;
      if (locked.current) return;

      const next = routes[face][key];
      if (!next) return;

      locked.current = true;

      setTransition({
        from: face,
        to: next,
        key,
      });

      setActive(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setActive(true);
        });
      });
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [face]);

  function finishTransition() {
    if (!transition) return;

    setFace(transition.to);
    setTransition(null);
    setActive(false);
    locked.current = false;
  }

  function renderFace(name: Face) {
    return (
      <section
        className={`screen screen-${name}`}
        style={{ background: colors[name] }}
      >
        {name.toUpperCase()}
      </section>
    );
  }

  return (
    <main className="scene">
      {!transition && renderFace(face)}

      {transition && (
        <div
          className={[
            "transition",
            `transition-${transition.key}`,
            active ? "is-active" : "",
          ].join(" ")}
          onTransitionEnd={(e) => {
            if (
              e.target === e.currentTarget &&
              e.propertyName === "transform"
            ) {
              finishTransition();
            }
          }}
        >
          <div className="panel panel-current">
            {renderFace(transition.from)}
          </div>

          <div className="panel panel-next">
            {renderFace(transition.to)}
          </div>
        </div>
      )}

      <div className="debug">
        FACE: {transition?.to ?? face}
      </div>
    </main>
  );
}
