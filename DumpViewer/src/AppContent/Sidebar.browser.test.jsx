import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Sidebar } from "./Filterer/SideBar/Sidebar";

// A valid Filter object for Sidebar props
const validFilter = {
  segementedBy: "/n",
  columns: { useCharCount: false, customChar: "/s" },
  exclude: {
    regex: null,
    lines: { before: undefined, after: undefined, list: [] },
  },
  highlight: {
    regex: null,
    lines: { before: undefined, after: undefined, list: [] },
  },
  name: "Default",
  isVisible: true,
  length: "all",
  viualWidth: 100,
  sections: [
    {
      name: "Default",
      isVisible: true,
      length: "all",
      viualWidth: 100,
      exclude: { regex: null },
      highlight: { regex: null },
    },
  ],
};

describe("Sidebar browser compatibility", () => {
  test("does not import Node.js modules like 'path'", () => {
    // This test will fail if Sidebar or its children import Node.js modules
    // because Vite will throw a browser compatibility error.
    expect(() => {
      render(
        <Sidebar
          whatIsVisible={{ File: true }}
          filter={validFilter}
          setFilter={() => {}}
          clearData={() => {}}
        />
      );
    }).not.toThrow(/externalized for browser compatibility/);
  });

  test("renders nothing if all whatIsVisible values are false", () => {
    render(
      <Sidebar
        whatIsVisible={{}}
        filter={validFilter}
        setFilter={() => {}}
        clearData={() => {}}
      />
    );
    // Should not render the sidebar div
    expect(screen.queryByText(/Sidebar/i)).toBeNull();
  });

  test("renders sidebar if at least one whatIsVisible value is true", () => {
    render(
      <Sidebar
        whatIsVisible={{ File: true }}
        filter={validFilter}
        setFilter={() => {}}
        clearData={() => {}}
      />
    );
    expect(screen.getByText(/Sidebar/i)).toBeInTheDocument();
  });
});
