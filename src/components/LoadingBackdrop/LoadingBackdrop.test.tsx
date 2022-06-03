import React from "react";
import { render } from "@testing-library/react";
import LoadingBackdrop from "./LoadingBackdrop";

describe("LoadingBackdrop component", () => {
  test("render LoadingBackdrop", () => {
    render(<LoadingBackdrop />);
  });
});
