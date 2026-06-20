import { useEffect, useState } from "react";

interface TypewriterOptions {
  delay?: number;
  speed?: number;
  variance?: number;
}

export default function useTypewriter(
  text?: string,
  {
    delay = 0,
    speed = 40,
    variance = 80,
  }: TypewriterOptions = {},
  enabled = true,
) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!enabled) return;

    setOutput("");

    const safeText = text ?? "";

    let i = 0;

    const start = setTimeout(() => {
      function type() {
        setOutput(safeText.slice(0, i + 1));

        i++;

        if (i < safeText.length) {
          const randomDelay =
            speed + Math.random() * variance;

          setTimeout(type, randomDelay);
        }
      }

      type();
    }, delay);

    return () => clearTimeout(start);

  }, [
    text,
    delay,
    speed,
    variance,
    enabled,
  ]);

  return output;
}
