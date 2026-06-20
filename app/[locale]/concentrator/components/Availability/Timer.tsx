"use client";

import { useEffect, useState } from "react";

type TimerProps = {
  seconds: number;
};

export default function Timer({
  seconds,
}: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  const formatted =
    `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

  return (
    <span
      className="fade-up delay-2400"
    >
      {formatted}
    </span>
  );
}
