import React, {FC} from 'react';
import parse from "html-react-parser";
import {OutputBlockData} from "../BlockRenderer";

/**
 * Header block output
 */


export type EditorJsHeader = {
    level: number,
    text: string,
}

export interface HeaderProps {
    item: OutputBlockData<EditorJsHeader>,
    className?: string
}

const HeaderBlock = ({item, className}: HeaderProps) : React.JSX.Element  => {
    switch (item.data.level) {
        case 2:
            return <h1 className={className} key={item.id}>{parse(item.data.text)}</h1>
        case 3:
            return <h2 className={className} key={item.id}>{parse(item.data.text)}</h2>
        case 4:
            return <h3 className={className} key={item.id}>{parse(item.data.text)}</h3>
        default:
            return <h1 className={className} key={item.id}>{parse(item.data.text)}</h1>
    }
};

export default HeaderBlock;