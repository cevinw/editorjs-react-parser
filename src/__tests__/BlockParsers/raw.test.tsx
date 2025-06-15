import { describe, expect } from "vitest";
import test from "../conftest";
import { OutputBlockData } from "../../BlockParser";
import { render } from "@testing-library/react";
import React from "react";
import Raw, { EditorJsRaw } from "../../BlockParsers/raw";

describe("Raw html parsing", () => {
  test("Should parse raw html parsing", async () => {
    const inputItem: OutputBlockData<EditorJsRaw> = {
      id: "testid",
      type: "raw",
      data: {
        html: "<h1>Test</h1><section><p>Test1</p><p>Test2</p></section>",
      },
    };
    const { container } = render(<Raw item={inputItem} />);
    expect(container).toMatchSnapshot();
  });
});
