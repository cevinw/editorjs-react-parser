import { describe, expect } from "vitest";
import test from "../conftest";
import { OutputBlockData } from "../../BlockParser";
import { render } from "@testing-library/react";
import React from "react";
import HeaderBlock, { EditorJsHeader } from "../../BlockParsers/header";

describe("Header block tests", () => {
  test("Should parse header block", async () => {
    const inputItem: OutputBlockData<EditorJsHeader> = {
      id: "testid",
      type: "header",
      data: {
        level: 1,
        text: "test",
      },
    };
    const { container } = render(<HeaderBlock item={inputItem} />);
    expect(container).toMatchSnapshot();
  });
});
