
export type Face =
  | "front"
  | "bottom"
  | "back"
  | "top"
  | "left"
  | "right";

export type Direction = "w" | "a" | "s" | "d";

export type CubeTransitionState = {
  from: Face;
  to: Face;
  key: Direction;
};
