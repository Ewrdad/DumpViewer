import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FileField } from "./FileField";
import React from "react";

describe("FileField", () => {
  it("calls clearData when the Reset Data button is pressed", async () => {
    const clearData = vi.fn();
    render(
      <FileField
        isVisible={true}
        filter={{}}
        setFilter={() => {}}
        clearData={clearData}
      />
    );
    const button = screen.getByRole("button", { name: /reset data/i });
    await userEvent.click(button);
    expect(clearData).toHaveBeenCalledTimes(1);
  });

  it("does not render if isVisible is false", () => {
    const clearData = vi.fn();
    render(
      <FileField
        isVisible={false}
        filter={{}}
        setFilter={() => {}}
        clearData={clearData}
      />
    );
    expect(screen.queryByRole("button", { name: /reset data/i })).toBeNull();
  });
});
