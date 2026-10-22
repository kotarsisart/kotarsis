
import CubeFace from "./CubeFace";
import type { CubeTransitionState } from "./cube.types";

type Props = {
  transition: CubeTransitionState;
  active: boolean;
  onFinish: () => void;
  onComplete: () => void;
};

export default function CubeTransition({
  transition,
  active,
  onFinish,
  onComplete,
}: Props) {
  return (
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
          onFinish();
        }
      }}
    >
      <div className="panel panel-current">
        <CubeFace
          face={transition.from}
          onFinish={onComplete}
        />
      </div>

      <div className="panel panel-next">
        <CubeFace
          face={transition.to}
          onFinish={onComplete}
        />
      </div>
    </div>
  );
}
