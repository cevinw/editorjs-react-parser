
import React from 'react';
import parse from "html-react-parser";
import {OutputBlockData} from "../BlockParser";

/**
 * Output of a paragraph block
 */

export type EditorJsParagraph = {
    text: string
}

export type ParagraphConfig = {
    className?: string
}

const defaultParagraphConfig : ParagraphConfig = {
    className: "mt-1"
}

export interface props {
    item: OutputBlockData<EditorJsParagraph>,
    config?: ParagraphConfig
}

const ParagraphBlock = ({item, config}: props) : React.JSX.Element  => {
    const currentConfig = Object.assign({}, defaultParagraphConfig, config)
    return <p className={currentConfig.className} key={item.id}>{parse(item.data.text)}</p>;
};

export default ParagraphBlock;