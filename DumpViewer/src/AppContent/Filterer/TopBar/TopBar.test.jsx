import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { TopBar } from "./TopBar";

// Helper to create a whatIsVisible object for all options
const allOptions = [
  "Tutorial",
  "Accesibility",
  "File",
  "Row",
  "Column",
  "Exclude",
  "Highlight",
  "General",
  "Visibility",
  "ExcludeColumn",
  "HighlightColumn",
];

function getInitialVisibility(val = true) {
  const obj = {};
  allOptions.forEach((opt) => {
    obj[opt] = val;
  });
  return obj;
}

describe("TopBar", () => {
  it("renders the toggle bar", () => {
    render(
      <TopBar
        whatIsVisible={getInitialVisibility()}
        setWhatIsVisible={() => {}}
      />
    );
    expect(screen.getByText("App:")).toBeInTheDocument();
    expect(screen.getByText("Data:")).toBeInTheDocument();
    expect(screen.getByText("Column:")).toBeInTheDocument();
  });

  it("toggles options", () => {
    const state = getInitialVisibility();
    const setWhatIsVisible = vi.fn();
    render(
      <TopBar whatIsVisible={state} setWhatIsVisible={setWhatIsVisible} />
    );
    // Click the 'Tutorial' toggle
    const tutorialToggle = screen.getByText("Tutorial");
    fireEvent.click(tutorialToggle);
    // Should call setWhatIsVisible
    expect(setWhatIsVisible).toHaveBeenCalled();
  });

  it("select all works", () => {
    const state = getInitialVisibility(false);
    const setWhatIsVisible = vi.fn();
    render(
      <TopBar whatIsVisible={state} setWhatIsVisible={setWhatIsVisible} />
    );
    fireEvent.click(screen.getByText("Select All"));
    // Should call setWhatIsVisible once for each option
    // There are 11 options in total
    expect(setWhatIsVisible).toHaveBeenCalledTimes(11);
    // All calls should set a key to true (even if already true)
    for (let i = 0; i < setWhatIsVisible.mock.calls.length; i++) {
      const updater = setWhatIsVisible.mock.calls[i][0];
      const prev = getInitialVisibility(false);
      const result = updater(prev);
      // The result should have all keys from prev, but at least one key is true
      expect(Object.values(result).some((v) => v === true)).toBe(true);
    }
  });

  it("deselect all works", () => {
    const state = getInitialVisibility(true);
    const setWhatIsVisible = vi.fn();
    render(
      <TopBar whatIsVisible={state} setWhatIsVisible={setWhatIsVisible} />
    );
    fireEvent.click(screen.getByText("Deselect All"));
    // Should call setWhatIsVisible once for each option
    expect(setWhatIsVisible).toHaveBeenCalledTimes(11);
    // All calls should set a key to false (even if already false)
    for (let i = 0; i < setWhatIsVisible.mock.calls.length; i++) {
      const updater = setWhatIsVisible.mock.calls[i][0];
      const prev = getInitialVisibility(true);
      const result = updater(prev);
      // The result should have all keys from prev, but at least one key is false
      expect(Object.values(result).some((v) => v === false)).toBe(true);
    }
  });

  it("displays the title", () => {
    render(
      <TopBar
        whatIsVisible={getInitialVisibility()}
        setWhatIsVisible={() => {}}
      />
    );
    expect(screen.getByText("DumpViewer")).toBeInTheDocument();
  });

  it("shows ewrdad with a link", () => {
    render(
      <TopBar
        whatIsVisible={getInitialVisibility()}
        setWhatIsVisible={() => {}}
      />
    );
    const link = screen.getByText("by Ewrdad");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute(
      "href",
      "http://ewrdad.github.io"
    );
  });
});
