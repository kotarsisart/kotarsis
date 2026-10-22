"use client";

import "./cube.scss";

import CubeFace from "./CubeFace";
import CubeTransition from "./CubeTransitions";

import { useCubeNavigation } from "./hooks/useCubeNavigation";
import { useCubeControls } from "./hooks/useCubeControls";

type CubePageProps = {
  onFinish: () => void;
};

export default function CubePage({
  onFinish,
}: CubePageProps) {
  const {
    face,
    transition,
    active,
    navigate,
    finishTransition,
  } = useCubeNavigation();

  useCubeControls(navigate);

  return (
    <main className="scene">
      {!transition && (
        <CubeFace
          face={face}
          onFinish={onFinish}
        />
      )}

      {transition && (
        <CubeTransition
          transition={transition}
          active={active}
          onFinish={finishTransition}
          onComplete={onFinish}
        />
      )}

      {/* <div className="debug">
        <div>FACE: {transition?.to ?? face}</div>
        <div>WASD / Arrows / Swipe</div>
      </div> */}
    </main>
  );
}
