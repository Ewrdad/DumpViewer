import { expect } from "vitest";
import "@testing-library/jest-dom";

// Ensure Vitest's expect is globally available
if (!globalThis.expect) {
  globalThis.expect = expect;
}
