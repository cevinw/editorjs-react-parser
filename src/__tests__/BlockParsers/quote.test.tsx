import {describe, expect} from "vitest";
import test from "../conftest";
import {OutputBlockData} from "../../BlockParser";
import {render} from "@testing-library/react";
import React from "react";
import QuoteBlock, {EditorJsQuote, QuoteAlignment} from "../../BlockParsers/quote";

describe("Error block tests", () => {
    test("Should not parse unhandled block", async () => {

        const inputItem : OutputBlockData<EditorJsQuote> = {
            id: "testid",
            type: "quote",
            data: {
                text: "test",
                caption: "By Albert",
                alignment: QuoteAlignment.left
            }
        }
        const {container} = render(<QuoteBlock item={inputItem}/>);
        expect(container).toMatchSnapshot();
    })
})