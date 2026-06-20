"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

import eyeAnim from "./eye-oraculux.json";

export default function HeroEye() {
  const eyeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!eyeRef.current) return;

    const anim = lottie.loadAnimation({
      container: eyeRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: eyeAnim,
    });

    return () => anim.destroy();
  }, []);

  return (
    <div
      className="hero__eye-animation"
      ref={eyeRef}
    />
  );
}
