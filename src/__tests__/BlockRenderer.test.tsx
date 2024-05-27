
import {describe, expect, test} from "vitest";
import {render} from "@testing-library/react";
import React from "react";
import BlockRenderer, {BlockRendererConfig} from "../BlockRenderer";
import * as fs from "node:fs";
import {idea} from "react-syntax-highlighter/dist/cjs/styles/hljs";

describe("BlockRenderer tests", () => {
    test("Block renderer snapshot test", async () => {
        const testData = await JSON.parse(fs.readFileSync(__dirname + "/resources/editorjsOutputData.json", "utf8"));
        const {container} = render(<BlockRenderer data={testData.data}/>);
        expect(container).toMatchSnapshot();
    })

    test("Render with custom classes", async () => {
        const testData = await JSON.parse(fs.readFileSync(__dirname + "/resources/editorjsOutputData.json", "utf8"));
        let config: BlockRendererConfig =  {
            image: {
                className: "testClass"
            },
            code: {
                className: "test",
                codeStyle: idea
            }
        }
        const {container} = render(<BlockRenderer data={testData.data} config={config}/>);
        expect(container.querySelector("img")?.className).toBe("testClass");
        expect(container.querySelector(".test")?.className).toBeDefined()
    })

})

