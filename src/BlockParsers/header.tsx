import React from 'react';
import parse from "html-react-parser";
import {OutputBlockData} from "../BlockParser";

/**
 * Header block output
 */


export type EditorJsHeader = {
    level: number,
    text: string,
}

export interface HeaderProps {
    item: OutputBlockData<EditorJsHeader>,
}

const HeaderBlock = ({item}: HeaderProps): React.JSX.Element => {

    return {
        2: <h2 key={item.id}>{parse(item.data.text)}</h2>,
        3: <h3 key={item.id}>{parse(item.data.text)}</h3>,
        4: <h4 key={item.id}>{parse(item.data.text)}</h4>,
    }[item.data.level] || <h1 key={item.id}>{parse(item.data.text)}</h1>
};

export default HeaderBlock;