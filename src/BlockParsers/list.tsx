import React from "react";
import {OutputBlockData} from "../BlockParser";

/**
 * Output of a list block
 */

export type EditorJsList = {
    style: ListStyle,
    items: string[]
}

export enum ListStyle {
    ordered = "ordered",
    unordered = "unordered",
}

export type ListConfig = {
    classNames: {
        unordered?: string,
        ordered?: string
    }
}

const defaultListConfig: ListConfig = {
    classNames: {
        unordered: "list-disc",
        ordered: "list-decimal",
    }
}

export interface ListProps {
    item: OutputBlockData<EditorJsList>,
    config?: ListConfig
}

const ListBlock = ({item, config}: ListProps): React.JSX.Element => {
    const currentClasses = Object.assign({}, defaultListConfig, config).classNames
    const listElements: React.JSX.Element[] = item.data.items.map((text: string, index: number) =>
        <li className={
            item.data.style == ListStyle.unordered ? currentClasses.unordered : currentClasses.ordered}
            key={index + text}>{text}</li>)
    if (item.data.style === ListStyle.ordered) {
        return <ol key={item.id}>{listElements}</ol>
    } else {
        return <ul key={item.id}>{listElements}</ul>
    }
};

export default ListBlock;