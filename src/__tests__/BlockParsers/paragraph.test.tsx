import {describe, expect} from "vitest";
import test from "../conftest";
import {OutputBlockData} from "../../BlockRenderer";
import {render} from "@testing-library/react";
import React from "react";
import ParagraphBlock, {EditorJsParagraph} from "../../BlockParsers/paragraph";

describe("Paragraph block tests", () => {
    test("Should parse paragraph block", async () => {

        const inputItem: OutputBlockData<EditorJsParagraph> = {
            id: "testid",
            type: "paragraph",
            data: {
                text: "test"
            }
        }
        const {container} = render(<ParagraphBlock item={inputItem}/>);
        expect(container).toMatchSnapshot();
    })
})