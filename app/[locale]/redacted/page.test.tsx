import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import RedactedPage from "./components/RedactedPage";

vi.mock("./components/crash/CrashFlow", () => ({
  default: () => <div>Crash Flow Mock</div>,
}));

vi.mock("./components/home/HomePage", () => ({
  default: () => <div>Home Page Mock</div>
}));

describe("RedactedPage", () => {
  it("starts with the crash experience", () => {
    render(<RedactedPage />);
    
    expect(screen.getByText("Crash Flow Mock")).toBeInTheDocument();
    expect(screen.queryByText("Home Page Mock")).not.toBeInTheDocument();
  });
});
