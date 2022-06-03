import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import ModalCustom from "./ModalCustom";

describe("ModalCustom component", () => {
  const open = true;
  const onClose = jest.fn();
  let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;

  beforeEach(() => {
    component = render(
      <ModalCustom open={open} onClose={onClose}>
        <div>Modal content</div>
      </ModalCustom>,
    );
  });

  test("renders ModalCustom content", () => {
    expect(component.getByText("Modal content")).toBeInTheDocument();
  });

  test("should call onClose on click", () => {
    const btn = component.getByRole("button");

    fireEvent.click(btn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
