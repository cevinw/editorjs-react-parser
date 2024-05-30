import {describe, expect} from "vitest";
import {render} from "@testing-library/react";
import React from "react";
import ColumnsBlock, {EditorJsColumns} from "../../BlockParsers/columns";
import {OutputBlockData} from "../../BlockRenderer";
import test from "../conftest"

describe("Column block tests", () => {
    test("Should parse column block", async ({ data }) => {
        const outputData = await data;
        const inputItem : OutputBlockData<EditorJsColumns> = {
            id: "testid",
            type: "columns",
            data: {
                cols: [outputData.data, outputData.data]
            }
        }
        const {container} = render(<ColumnsBlock item={inputItem}/>);
        expect(container).toMatchSnapshot();
    })
})