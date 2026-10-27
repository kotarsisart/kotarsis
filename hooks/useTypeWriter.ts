import { useEffect, useState } from "react";

interface TypewriterOptions {
  delay?: number;
  speed?: number;
  variance?: number;
}

type TypewriterState = {
  key: string;
  output: string;
};

export default function useTypewriter(
  text?: string,
  {
    delay = 0,
    speed = 40,
    variance = 80,
  }: TypewriterOptions = {},
  enabled = true,
) {
  const safeText = text ?? "";

  const key = JSON.stringify([
    safeText,
    delay,
    speed,
    variance,
    enabled,
  ]);

  const [state, setState] = useState<TypewriterState>({
    key,
    output: "",
  });

  // If animation parameters change, don't expose stale text
  const output = state.key === key ? state.output : "";

  useEffect(() => {
    if (!enabled || safeText.length === 0) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    let index = 0;

    const type = () => {
      if (cancelled) return;

      index++;

      setState({
        key,
        output: safeText.slice(0, index),
      });

      if (index < safeText.length) {
        const randomDelay =
          speed + Math.random() * variance;

        timer = setTimeout(type, randomDelay);
      }
    };

    timer = setTimeout(type, delay);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [safeText, delay, speed, variance, enabled, key]);

  return output;
}
