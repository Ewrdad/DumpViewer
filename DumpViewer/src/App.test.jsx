import React from "react";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import App from "./App";
import path from "path";

console.log("Alias resolution test: ", import.meta.env);
console.log(
  "Resolved path for '@/components/ui/toggle-group':",
  path.resolve("@/components/ui/toggle-group")
);

describe("App Component", () => {
  test("renders the App component and checks for 'DumpViewer' text", () => {
    render(<App />);
    const textElement = screen.getByText(/DumpViewer/i);
    expect(textElement).toBeInTheDocument();
  });
});
