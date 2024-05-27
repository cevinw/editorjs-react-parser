
import React from 'react';
import parse from "html-react-parser";
import {OutputBlockData} from "../BlockRenderer";

/**
 * Output of a paragraph block
 */

export type EditorJsParagraph = {
    text: string
}

export interface props {
    item: OutputBlockData<EditorJsParagraph>,
    className?: string
}

const ParagraphBlock = ({item, className}: props) : React.JSX.Element  => {
    return <p className={className ? className : "mt-1"} key={item.id}>{parse(item.data.text)}</p>;
};

export default ParagraphBlock;