import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import DrawerGeneric from "./DrawerGeneric";
import { MemoryRouter } from "react-router-dom";

describe("DrawerGeneric component", () => {
  let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;
  const open = true;
  const items = [
    {
      label: "Item 1",
      icon: <div>Icon 1</div>,
      to: "/item1",
    },
  ];
  const handleDrawerOpen = jest.fn();

  beforeEach(() => {
    component = render(
      <DrawerGeneric
        open={open}
        items={items}
        handleDrawerOpen={handleDrawerOpen}
      />,
      {
        wrapper: MemoryRouter,
      },
    );
  });

  test("renders DrawerGeneric list items", () => {
    const list = component.container.querySelector("ul.MuiList-root");

    expect(list?.children.length).toEqual(items.length);
  });

  test("should call handleDrawerOpen on click", () => {
    const btn = component.container.querySelector("button.MuiButtonBase-root");

    fireEvent.click(btn!);
    expect(handleDrawerOpen).toHaveBeenCalledTimes(1);
  });
});
