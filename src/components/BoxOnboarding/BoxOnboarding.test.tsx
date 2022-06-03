import React from "react";
import { render } from "@testing-library/react";
import BoxOnboarding from "./BoxOnboarding";

describe("BoxOnboarding component", () => {
  test("renders BoxOnboarding", () => {
    const component = render(
      <BoxOnboarding>
        <div>test children</div>
      </BoxOnboarding>,
    );

    component.getByText("test children");
  });
});
