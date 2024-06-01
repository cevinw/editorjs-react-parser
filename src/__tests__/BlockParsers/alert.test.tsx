import {describe, expect, test} from "vitest";
import {render} from "@testing-library/react";
import React from "react";
import AlertBlock, {AlertAlignment, AlertType, EditorJsAlert} from "../../BlockParsers/alert";
import {OutputBlockData} from "../../BlockParser";

describe("Alert Block tests", () => {
    test("Render alert snapshot test", async () => {


        const alertBlockData: OutputBlockData<EditorJsAlert> = {
            data: {
                type: AlertType.success,
                align: AlertAlignment.center,
                message: "test"
            },
            type: "alert",
            id: "id",

        }

        const {container} = render(<AlertBlock item={alertBlockData}/>);
        expect(container).toMatchSnapshot();
    })

    test.each([
        [AlertType.success, "bg-green-100"],
        [AlertType.danger, "bg-red-200"],
        [AlertType.warning, "bg-orange-100"],
        [AlertType.light, "bg-white"],
        [AlertType.dark, "bg-gray-900"],
        [AlertType.primary, "bg-gray-300"],
        [AlertType.info, "bg-gray-300"]

    ])("Render alert type test", async (type, expected: string) => {
        const alertBlockData: OutputBlockData<EditorJsAlert> = {
            data: {
                type: type,
                align: AlertAlignment.right,
                message: "test"
            },
            type: "alert",
            id: "id",

        }
        const {container} = render(<AlertBlock item={alertBlockData}/>);
        expect(container.querySelector("figure")?.className).contains(expected);

    })
})
