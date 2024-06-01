import React from 'react';
import {OutputBlockData} from "../BlockParser";

/**
 * Output of a quote block
 */

export type EditorJsQuote = {
    text: string,
    caption: string,
    alignment: QuoteAlignment
}

export enum QuoteAlignment {
    left = "left",
    center = "center",
    right = "right",
}

export type QuoteConfig = {
    classNames: {
        alignCenter?: string,
        alignRight?: string,
        alignLeft?: string,
        quote?: string,
        caption?: string,
    }
}

const defaultQuoteConfig: QuoteConfig = {
    classNames: {
        alignCenter: "text-center",
        alignRight: "text-right",
        alignLeft: "text-left",
        quote: "italic text-lg",
        caption: "opacity-85 text-sm"
    }
}

export interface QuoteProps {
    item: OutputBlockData<EditorJsQuote>,
    config?: QuoteConfig
}

const QuoteBlock = ({item, config}: QuoteProps): React.JSX.Element => {
    const currentConfig: QuoteConfig = Object.assign({}, defaultQuoteConfig, config)
    return <p className={{
        [QuoteAlignment.left]: currentConfig.classNames.alignLeft,
        [QuoteAlignment.center]: currentConfig.classNames.alignCenter,
        [QuoteAlignment.right]: currentConfig.classNames.alignRight,
    }[item.data.alignment]}><span
        className={currentConfig.classNames.quote}>&quot;{item.data.text}&quot;</span><br/><span
        className={currentConfig.classNames.caption}>- {item.data.caption}</span></p>
};

export default QuoteBlock;