import React from 'react';
import {OutputBlockData} from "../BlockRenderer";

/**
 * Delimiter block output
 */

export interface DelimiterProps {
    item: OutputBlockData
    className?: string
}

const DelimiterBlock = ({item, className}: DelimiterProps) : React.JSX.Element  => {
    return <section key={item.id} className={className ? className : "grid my-8"}>
        <hr className={"w-1/3 justify-self-center"}></hr>
    </section>
};

export default DelimiterBlock;