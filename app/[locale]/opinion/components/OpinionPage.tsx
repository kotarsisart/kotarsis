"use client";

import { useState } from "react";

import CubePage from "../components/cube/CubePage";
import HomePage from "../components/home/HomePage";

type Screen = "cube" | "home";

export default function OpinionPage() {
  const [screen, setScreen] = useState<Screen>("cube");

  // for develop
  // const [screen, setScreen] = useState<Screen>("home");

  if (screen === "home") {
    return (
      <HomePage
        onRestart={() => setScreen("cube")}
      />
    );
  }

  return (
    <CubePage
      onFinish={() => setScreen("home")}
    />
  );
}
