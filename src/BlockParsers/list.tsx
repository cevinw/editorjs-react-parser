
import React from "react";
import {OutputBlockData} from "../BlockRenderer";

/**
 * Output of a list block
 */

export type EditorJsList = {
    style: string,
    items: string[]
}

export interface ListProps {
    item: OutputBlockData<EditorJsList>,
    className?: string
}

const ListBlock = ({item, className}: ListProps) : React.JSX.Element  => {
    let listElements: React.JSX.Element[] = item.data.items.map((text: string, index: number) =>
        <li className={className ? className : item.data.style == "unordered" ? "list-disc" : "list-decimal"}
            key={index + text}>{text}</li>)
    if (item.data.style === "ordered") {
        return <ol key={item.id}>{listElements}</ol>
    } else {
        return <ul key={item.id}>{listElements}</ul>
    }
};

export default ListBlock;