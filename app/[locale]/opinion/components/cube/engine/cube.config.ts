
import type { Direction, Face } from "./cube.types";

export const SWIPE_THRESHOLD = 60;

export const routes: Record<
  Face,
  Partial<Record<Direction, Face>>
> = {
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

export const keyboardDirections: Record<string, Direction> = {
  w: "w",
  a: "a",
  s: "s",
  d: "d",

  arrowup: "w",
  arrowleft: "a",
  arrowdown: "s",
  arrowright: "d",
};
