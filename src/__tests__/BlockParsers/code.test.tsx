import { describe, expect, test } from "vitest";
import { OutputBlockData } from "../../BlockParser";
import { render } from "@testing-library/react";
import React from "react";
import CodeBlock, { EditorJsCode } from "../../BlockParsers/code";
import { idea } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const codeBlockData: OutputBlockData<EditorJsCode> = {
  data: {
    code: "const test = test",
    mode: "ts",
  },
  type: "alert",
  id: "id",
};

describe("Code Block tests", () => {
  test("Render code snapshot test", async () => {
    const { container } = render(
      <CodeBlock
        item={codeBlockData}
        config={{
          languages: [
            {
              language: "typescript",
              displayText: "Typescript",
              logoAlt: "ts-logo",
              logoSrc: "/code-logos/typescript.svg",
              shortName: "ts",
            },
          ],
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Render code with other codeStyle", async () => {
    const { container } = render(
      <CodeBlock
        item={codeBlockData}
        config={{
          codeStyle: idea,
        }}
      />,
    );
    expect(container.querySelector("span")?.style.color).toBe("rgb(0, 0, 128)");
  });
});
