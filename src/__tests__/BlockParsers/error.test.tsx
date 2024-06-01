import {describe, expect} from "vitest";
import test from "../conftest";
import {OutputBlockData} from "../../BlockParser";
import {render} from "@testing-library/react";
import React from "react";
import Error from "../../BlockParsers/error";

describe("Error block tests", () => {
    test("Should not parse unhandled block", async () => {

        const inputItem : OutputBlockData = {
            id: "testid",
            type: "unhandledType",
            data: {
                whatever: "something"
            }
        }
        const {container} = render(<Error item={inputItem}/>);
        expect(container).toMatchSnapshot();
    })
})