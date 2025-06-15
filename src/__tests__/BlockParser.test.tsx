import { describe, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import BlockParser, { BlockParserConfig } from "../BlockParser";
import { idea } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import test from "./conftest";

describe("BlockParser tests", () => {
  test("Block renderer snapshot test", async ({ data }) => {
    const testData = await data;
    const { container } = render(<BlockParser data={testData.data} />);
    expect(container).toMatchSnapshot();
  });

  test("Render with custom classes", async ({ data }) => {
    const testData = await data;
    let config: BlockParserConfig = {
      image: {
        classNames: {
          image: "testClass",
        },
      },
      code: {
        classNames: {
          container: "test",
        },
        codeStyle: idea,
      },
    };
    const { container } = render(
      <BlockParser data={testData.data} config={config} />,
    );
    expect(container.querySelector("img")?.className).toBe("testClass");
    expect(container.querySelector(".test")?.className).toBeDefined();
  });
});
