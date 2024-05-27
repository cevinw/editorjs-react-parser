import {describe, expect, test} from "vitest";
import {render} from "@testing-library/react";
import React from "react";
import AlertBlock, {EditorJsAlert} from "../../BlockParsers/alert";
import {OutputBlockData} from "../../BlockRenderer";

describe("Alert Block tests", () => {
    test("Render alert snapshot test", async () => {

        const alertBlockData : OutputBlockData<EditorJsAlert> = {
            data: {
                type: "success",
                align: "center",
                message: "test"
            },
            type: "alert",
            id: "id",

        }

        const {container} = render(<AlertBlock item={alertBlockData}/>);
        expect(container).toMatchSnapshot();
    })

    test.each([
        ["success", "bg-green-100"],
        ["danger", "bg-red-200"],
        ["warning", "bg-orange-100"],
        ["light", "bg-white"],
        ["dark", "bg-gray-900"],
        ["primary", "bg-gray-300"],
        ["info", "bg-gray-300"]

    ])("Render alert type test", async (type: string, expected: string) => {
        const alertBlockData : OutputBlockData<EditorJsAlert> = {
            data: {
                type: type,
                align: "center",
                message: "test"
            },
            type: "alert",
            id: "id",

        }
        const {container} = render(<AlertBlock item={alertBlockData}/>);
        expect(container.querySelector("section")?.className).contains(expected);

    })
})
