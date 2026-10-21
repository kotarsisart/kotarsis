
import CubeFace from "./CubeFace";
import type { CubeTransitionState } from "./cube.types";

type Props = {
  transition: CubeTransitionState;
  active: boolean;
  onFinish: () => void;
};

export default function CubeTransition({
  transition,
  active,
  onFinish,
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
        <CubeFace face={transition.from} />
      </div>

      <div className="panel panel-next">
        <CubeFace face={transition.to} />
      </div>
    </div>
  );
}
