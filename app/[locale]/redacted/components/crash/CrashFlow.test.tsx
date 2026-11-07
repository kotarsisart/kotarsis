import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import CrashFlow from "./CrashFlow";

const { COMPLETE_PRELOADER } = vi.hoisted(() => ({
  COMPLETE_PRELOADER: "Complete Preloader",
}));

vi.mock("./CrashPreloader/CrashPreloader", () => ({
  default: ({ onComplete }: { onComplete: () => void }) => (
    <button onClick={onComplete}>
      {COMPLETE_PRELOADER}
    </button>
  ),
}));

vi.mock("./Entry/Entry", () => ({
  default: () => <div>Entry Mock</div>,
}));

vi.mock("./Contrast/Contrast", () => ({
  default: () => <div>Contrast Mock</div>,
}));

vi.mock("./Focus/Focus", () => ({
  default: () => <div>Focus Mock</div>,
}));

vi.mock("./Clarity/Clarity", () => ({
  default: () => <div>Clarity Mock</div>,
}));

vi.mock("./Ship/Ship", () => ({
  default: () => <div>Ship Mock</div>,
}));

describe("CrashFlow", () => {
  it("starts from the crash preloader", () => {
    render(<CrashFlow onFinish={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: COMPLETE_PRELOADER }),
    ).toBeInTheDocument();

    expect(screen.queryByText("Entry Mock")).not.toBeInTheDocument();
  });

  it("moves from preloader to entry", () => {
    render(<CrashFlow onFinish={vi.fn()} />);

    fireEvent.click(
      screen.getByRole("button", { name: COMPLETE_PRELOADER }),
    );

    expect(screen.getByText("Entry Mock")).toBeInTheDocument();

    expect(
      screen.queryByRole("button", { name: COMPLETE_PRELOADER }),
    ).not.toBeInTheDocument();
  });
});
