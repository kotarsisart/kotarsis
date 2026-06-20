import { useState } from "react";

import CrashPreloader from "./CrashPreloader/CrashPreloader";
import Entry from "./Entry/Entry";
import Contrast from "./Contrast/Contrast";
import Focus from "./Focus/Focus";
import Clarity from "./Clarity/Clarity";
import Ship from "./Ship/Ship";
import '../../globals.css'

type Stage =
  | "crash-preloader"
  | "entry"
  | "contrast"
  | "focus"
  | "clarity"
  | "ship";

type Props = {
  onFinish: () => void;
};

/**
 * Controls the full crash experience flow.
 *
 * Each stage represents a separate interaction step,
 * forming a sequential progression from entry to completion.
 */
export default function CrashFlow({ onFinish }: Props) {
  const [stage, setStage] = useState<Stage>("crash-preloader");

  // Sequentially render stages based on current progress
  switch (stage) {
    case "crash-preloader":
      return (
        <CrashPreloader
          onComplete={() => setStage("entry")}
        />
      );

    case "entry":
      return <Entry onDone={() => setStage("contrast")} />;

    case "contrast":
      return <Contrast onComplete={() => setStage("focus")} />;

    case "focus":
      return <Focus onComplete={() => setStage("clarity")} />;

    case "clarity":
      return <Clarity onComplete={() => setStage("ship")} />;

    case "ship":
      return <Ship onComplete={onFinish} />;

    default:
      return null;
  }
}
