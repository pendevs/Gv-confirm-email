import React from "react";
import { render } from "@testing-library/react";
import Loading from "./Loading";


describe("Loading component", () => {
  test("render Loading with default size", () => {
    const component = render(<Loading />);

    const progressbar = component.getByRole("progressbar");

    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveStyle(`width: ${150}px`);
    expect(progressbar).toHaveStyle(`height: ${150}px`);
  });

  test("render Loading with custom size", () => {
    const size = 10;
    const component = render(<Loading size={size} />);

    const progressbar = component.getByRole("progressbar");

    expect(progressbar).toHaveStyle(`width: ${size}px`);
    expect(progressbar).toHaveStyle(`height: ${size}px`);
  });
});
