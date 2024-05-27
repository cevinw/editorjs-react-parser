
import React from 'react';
import {OutputBlockData} from "../BlockRenderer";

/**
 * Output of a quote block
 */

export type EditorJsQuote = {
    text: string,
    caption: string,
    alignment: alignment
}
enum alignment {
    left = "left",
    center = "center",
    right = "right",
}

export interface QuoteProps {
    item: OutputBlockData<EditorJsQuote>,
    className?: string
}

const QuoteBlock = ({item, className}: QuoteProps) : React.JSX.Element  => {
    return <p className={className ? className : {
        "left": "text-start",
        "center": "text-center",
        "right": "text-right"
    }[item.data.alignment]}><span className={"italic text-lg"}>&quot;{item.data.text}&quot;</span><br/><span
        className={"opacity-85 text-sm"}>- {item.data.caption}</span></p>
};

export default QuoteBlock;