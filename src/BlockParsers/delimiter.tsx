import React from 'react';
import {OutputBlockData} from "../BlockParser";

/**
 * Delimiter block output
 */

export type DelimiterConfig = {
    classNames?: {
        container?: string,
        delimiter?: string,
    }
}

const defaultDelimiterConfig: DelimiterConfig = {
    classNames: {
        container: "grid my-8",
        delimiter: "w-1/3 justify-self-center"
    }
}

export interface DelimiterProps {
    item: OutputBlockData<{}>
    config?: DelimiterConfig
}

const DelimiterBlock = ({item, config}: DelimiterProps) : React.JSX.Element  => {
    const currentConfig: DelimiterConfig = Object.assign({}, defaultDelimiterConfig, item)
    return <section key={item.id} className={currentConfig.classNames?.container}>
        <hr className={currentConfig.classNames?.delimiter}></hr>
    </section>
};

export default DelimiterBlock;