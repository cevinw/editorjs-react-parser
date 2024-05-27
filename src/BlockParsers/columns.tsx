
import React from 'react';
import BlockRenderer, {BlockRendererConfig, OutputBlockData, OutputData} from "../BlockRenderer";

/**
 * Output of the columns block
 * A column contains the same data structure of editorJs data and will call the BlockRenderer recursively
 */

export type EditorJsColumns = {
    cols: OutputData[]
}

export interface ColumnsProps {
    item: OutputBlockData<EditorJsColumns>,
    config?: BlockRendererConfig
}


const ColumnsBlock = ({item, config} : ColumnsProps) : React.JSX.Element  => {

    let cols = item.data.cols.length;
    let innerBlocks = item.data.cols.map((col: OutputData, index: number) =>
        <div key={col.time + index.toString()} className={"self-center"}><BlockRenderer data={col} config={config}/></div>
    )

    return <section key={item.id} className={"grid gap-4 " + {
        2: "grid-cols-2",
        3: "grid-cols-3"
    }[cols]}>{innerBlocks}</section>
};

export default ColumnsBlock;