"use client";

import { useState } from "react";

import CubePage from "./cube/engine/CubePage";
import MainPage from "./main/MainPage";

type Screen = "intro" | "cube" | "outro";

export default function OpinionPage() {
  const [screen, setScreen] = useState<Screen>("intro");

  if (screen === "cube") {
    return (
      <CubePage
        onFinish={() => setScreen("outro")}
      />
    );
  }

  return (
    <MainPage
      screen={screen}
      onStart={() => setScreen("cube")}
      onRestart={() => setScreen("cube")}
    />
  );
}
