
import type { ComponentType } from "react";
import type { Face } from "./cube.types";

import FrontIntroduction from "../faces/FrontIntroduction/FrontIntroduction";
import BottomChoice from "../faces/BottomChoice/BottomChoice";
import BackReveal from "../faces/BackReveal/BackReveal";
import LeftPessimism from "../faces/LeftPessimism/LeftPessimism";
import RightOptimism from "../faces/RightOptimism/RightOptimism";
import TopConclusion from "../faces/TopConclusion/TopConclusion";

const components: Record<Face, ComponentType> = {
  front: FrontIntroduction,
  bottom: BottomChoice,
  back: BackReveal,
  top: TopConclusion,
  left: LeftPessimism,
  right: RightOptimism,
};

type Props = {
  face: Face;
};

export default function CubeFace({ face }: Props) {
  const Component = components[face];

  return (
    <div className={`screen screen-${face}`}>
      <Component />
    </div>
  );
}
