import {describe, expect} from "vitest";
import test from "../conftest";
import {OutputBlockData} from "../../BlockRenderer";
import {render} from "@testing-library/react";
import React from "react";
import TableBlock, {EditorJsTable} from "../../BlockParsers/table";

describe("Table block tests", () => {
    test("Should parse table block", async () => {

        const inputItem: OutputBlockData<EditorJsTable> = {
            id: "testid",
            type: "table",
            data: {
                content: [
                    ["test", "test"]
                ],
                withHeadings: true

            }
        }
        const {container} = render(<TableBlock item={inputItem}/>);
        expect(container).toMatchSnapshot();
    })
})