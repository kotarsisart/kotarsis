"use client";

import { useState } from "react";

import CrashFlow from "../components/crash/CrashFlow";
import HomePage from "../components/home/HomePage";

type Screen = "crash" | "home";

export default function RedactedPage() {
  // const [screen, setScreen] = useState<Screen>("crash");

  // for develop
  const [screen, setScreen] = useState<Screen>("home");

  if (screen === "home") {
    return (
      <HomePage
        onRestart={() => setScreen("crash")}
      />
    );
  }

  return (
    <CrashFlow
      onFinish={() => setScreen("home")}
    />
  );
}
