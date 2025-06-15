import { describe, expect } from "vitest";
import test from "../conftest";
import { OutputBlockData } from "../../BlockParser";
import { render } from "@testing-library/react";
import React from "react";
import Delimiter from "../../BlockParsers/delimiter";

describe("Delimiter block test", () => {
  test("Should parse delimiter block", async () => {
    const inputItem: OutputBlockData<{}> = {
      data: {},
      type: "delimiter",
      id: "123",
    };
    const { container } = render(<Delimiter item={inputItem} />);
    expect(container).toMatchSnapshot();
  });
});
