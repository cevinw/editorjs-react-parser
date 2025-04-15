import React from "react";
import { OutputBlockData } from "../BlockParser";

/**
 * Output of a list block
 */

export interface ListItem {
    /**
     * list item text content
     */
    content: string;
    /**
     * Meta information of each list item
     */
    meta: object;
    /**
     * sublist items
     */
    items: ListItem[];
}

export type EditorJsList = {
    style: ListStyle;
    meta: object;
    items: ListItem[] | string[];
};

export enum ListStyle {
    ordered = "ordered",
    unordered = "unordered",
}

export type ListConfig = {
    classNames: {
        unordered?: string;
        ordered?: string;
    };
};

const defaultListConfig: ListConfig = {
    classNames: {
        unordered: "list-disc ml-7",
        ordered: "list-decimal ml-7",
    },
};

export interface ListProps {
    item: OutputBlockData<EditorJsList>;
    config?: ListConfig;
}

const ListBlock = ({ item, config }: ListProps): React.JSX.Element => {
    const currentClasses = Object.assign(
        {},
        defaultListConfig,
        config
    ).classNames;
    const listElements: React.JSX.Element[] = item.data.items.map(
        (text: ListItem | string, index: number) => {
            if (typeof text === "string") {
                return (
                    <li
                        className={
                            item.data.style == ListStyle.unordered
                                ? currentClasses.unordered
                                : currentClasses.ordered
                        }
                        key={index + text}
                    >
                        {text}
                    </li>
                );
            }
            return (
                <li
                    className={
                        item.data.style == ListStyle.unordered
                            ? currentClasses.unordered
                            : currentClasses.ordered
                    }
                    key={index + text.content}
                >
                    {text.content}
                    {text.items.length > 0 && (
                        <ListBlock
                            item={{
                                data: {
                                    style: item.data.style,
                                    meta: item.data.meta,
                                    items: text.items,
                                },
                                type: "list",
                            }}
                            config={config}
                        />
                    )}
                </li>
            );
        }
    );

    if (item.data.style === ListStyle.ordered) {
        return <ol key={item.id}>{listElements}</ol>;
    } else {
        return <ul key={item.id}>{listElements}</ul>;
    }
};

export default ListBlock;
