import { describe, expect } from "vitest";
import test from "../conftest";
import { OutputBlockData } from "../../BlockParser";
import { render } from "@testing-library/react";
import React from "react";
import ImageBlock from "../../BlockParsers/image";

describe("Image block tests", () => {
  test("Should parse image block", async () => {
    const inputItem: OutputBlockData = {
      id: "testid",
      type: "image",
      data: {
        file: {
          url: "http://test.test.png",
        },
        caption: "",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    };
    const { container } = render(<ImageBlock item={inputItem} />);
    expect(container).toMatchSnapshot();
  });
});
