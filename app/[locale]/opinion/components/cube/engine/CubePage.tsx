"use client";

import "./cube.scss";

import CubeFace from "./CubeFace";
import CubeTransition from "./CubeTransitions";

import { useCubeNavigation } from "./hooks/useCubeNavigation";
import { useCubeControls } from "./hooks/useCubeControls";

export default function CubePage() {
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
      {!transition && <CubeFace face={face} />}

      {transition && (
        <CubeTransition
          transition={transition}
          active={active}
          onFinish={finishTransition}
        />
      )}

      <div className="debug">
        <div>FACE: {transition?.to ?? face}</div>
        <div>WASD / Arrows / Swipe</div>
      </div>
    </main>
  );
}
