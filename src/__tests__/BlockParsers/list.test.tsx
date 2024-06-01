import {describe, expect} from "vitest";
import test from "../conftest";
import {OutputBlockData} from "../../BlockParser";
import {render} from "@testing-library/react";
import Error from "../../BlockParsers/error";
import React from "react";
import ListBlock, {EditorJsList, ListStyle} from "../../BlockParsers/list";

describe("Error block tests", () => {
    test("Should not parse unhandled block", async () => {

        const inputItem: OutputBlockData<EditorJsList> = {
            id: "testid",
            type: "list",
            data: {
                items: [
                    "test",
                    "test"
                ],
                style: ListStyle.ordered
            }
        }
        const {container} = render(<Error item={inputItem}/>);
        expect(container).toMatchSnapshot();
    })
    test.each([
        [ListStyle.ordered, "ol"],
        [ListStyle.unordered, "ul"]
    ])("Should parse both list types", async (type, expected) => {
        const inputItem: OutputBlockData<EditorJsList> = {
            id: "testid",
            type: "list",
            data: {
                items: [
                    "test",
                    "test"
                ],
                style: type
            }
        }
        const {container} = render(<ListBlock item={inputItem}/>);
        expect(container.querySelector(expected)?.innerHTML).toBeDefined()
    })
})