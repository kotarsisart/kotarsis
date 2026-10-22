
import { useCallback, useEffect, useRef, useState } from "react";

import { routes } from "../cube.config";
import type {
  Direction,
  Face,
  CubeTransitionState,
} from "../cube.types";

export function useCubeNavigation() {
  const [face, setFace] = useState<Face>("front");

  const [transition, setTransition] =
    useState<CubeTransitionState | null>(null);

  const [active, setActive] = useState(false);

  const locked = useRef(false);
  const animationFrame = useRef<number | null>(null);

  const navigate = useCallback(
    (direction: Direction) => {
      if (locked.current) return;

      const next = routes[face][direction];
      if (!next) return;

      locked.current = true;

      setTransition({
        from: face,
        to: next,
        key: direction,
      });

      setActive(false);

      animationFrame.current = requestAnimationFrame(() => {
        animationFrame.current = requestAnimationFrame(() => {
          setActive(true);
        });
      });
    },
    [face]
  );

  const finishTransition = useCallback(() => {
    if (!transition) return;

    setFace(transition.to);
    setTransition(null);
    setActive(false);

    locked.current = false;
  }, [transition]);

  useEffect(() => {
    return () => {
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return {
    face,
    transition,
    active,
    navigate,
    finishTransition,
  };
}
