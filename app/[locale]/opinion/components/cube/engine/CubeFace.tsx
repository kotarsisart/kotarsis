import type { ComponentType } from "react";
import type { Face } from "./cube.types";

import FrontIntroduction from "../faces/FrontIntroduction/FrontIntroduction";
import BottomChoice from "../faces/BottomChoice/BottomChoice";
import BackReveal from "../faces/BackReveal/BackReveal";
import LeftPessimism from "../faces/LeftPessimism/LeftPessimism";
import RightOptimism from "../faces/RightOptimism/RightOptimism";
import TopConclusion from "../faces/TopConclusion/TopConclusion";

const components: Record<Exclude<Face, "top">, ComponentType> = {
  front: FrontIntroduction,
  bottom: BottomChoice,
  back: BackReveal,
  left: LeftPessimism,
  right: RightOptimism,
};

type Props = {
  face: Face;
  onFinish: () => void;
};

export default function CubeFace({
  face,
  onFinish,
}: Props) {
  if (face === "top") {
    return (
      <div className="screen screen-top">
        <TopConclusion onFinish={onFinish} />
      </div>
    );
  }

  const Component = components[face];

  return (
    <div className={`screen screen-${face}`}>
      <Component />
    </div>
  );
}
