"use client";

import { useCallback, useEffect, useRef } from "react";

type SoundType = "click" | "activate" | "notification" | "complete";

export default function useConcentratorSound() {
  const contextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    return () => {
      const context = contextRef.current;
      contextRef.current = null;

      if (context && context.state !== "closed") {
        void context.close();
      }
    };
  }, []);

  const playSound = useCallback(
    (type: SoundType, enabled: boolean) => {
      if (!enabled) return;

      try {
        // Reuse a single audio context instead of creating
        // a new one for every sound.
        let context = contextRef.current;

        if (!context || context.state === "closed") {
          context = new AudioContext();
          contextRef.current = context;
        }

        if (context.state === "suspended") {
          void context.resume();
        }

        const playTone = (
          frequency: number,
          duration: number,
          delay = 0,
          volume = 0.035,
          waveform: OscillatorType = "sine",
        ) => {
          if (!context) return;

          const start = context.currentTime + delay;
          const oscillator = context.createOscillator();
          const gain = context.createGain();

          oscillator.type = waveform;
          oscillator.frequency.setValueAtTime(frequency, start);

          // Short fade-in and exponential fade-out prevent
          // clicks caused by abruptly cutting the waveform.
          gain.gain.setValueAtTime(0.0001, start);
          gain.gain.exponentialRampToValueAtTime(
            volume,
            start + 0.008,
          );
          gain.gain.exponentialRampToValueAtTime(
            0.0001,
            start + duration,
          );

          oscillator.connect(gain);
          gain.connect(context.destination);

          oscillator.start(start);
          oscillator.stop(start + duration + 0.01);

          oscillator.onended = () => {
            oscillator.disconnect();
            gain.disconnect();
          };
        };

        switch (type) {
          case "click":
            // Short, mechanical-sounding button click.
            playTone(850, 0.035, 0, 0.028, "sine");
            playTone(420, 0.045, 0.015, 0.02, "triangle");
            break;

          case "activate":
            // Ascending electronic startup sequence.
            playTone(220, 0.12, 0, 0.035, "triangle");
            playTone(440, 0.12, 0.09, 0.03, "sine");
            playTone(660, 0.2, 0.18, 0.025, "sine");
            break;

          case "notification":
            // Quiet, unobtrusive notification.
            playTone(660, 0.12, 0, 0.018);
            playTone(880, 0.16, 0.1, 0.018);
            break;

          case "complete":
            // Short completion melody.
            playTone(523.25, 0.18);
            playTone(659.25, 0.18, 0.16);
            playTone(783.99, 0.4, 0.32);
            break;
        }
      } catch {
        // Audio is optional: the device remains functional
        // even if the browser blocks audio playback.
      }
    },
    [],
  );

  return { playSound };
}
