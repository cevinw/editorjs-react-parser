import React from 'react';
import BlockRenderer, {BlockRendererConfig, OutputBlockData, OutputData} from "../BlockRenderer";

/**
 * Output of the columns block
 * A column contains the same data structure of editorJs data and will call the BlockRenderer recursively
 *
 * This parser provides support for the @calumk/editorjs-columns block tool
 */

export type EditorJsColumns = {
    cols: OutputData[]
}

export type ColumnsConfig = {
    classNames?: {
        outerContainer?: string,
        innerBlocksContainers?: string,
        twoColumns?: string,
        threeColumns?: string,
    }
}

const defaultConfig: ColumnsConfig = {
    classNames: {
        outerContainer: "grid gap-4",
        innerBlocksContainers: "self-center",
        twoColumns: "grid-cols-2",
        threeColumns: "grid-cols-3",
    }
}

export interface ColumnsProps {
    item: OutputBlockData<EditorJsColumns>,
    config?: ColumnsConfig,
    blockRendererConfig?: BlockRendererConfig,
}


const ColumnsBlock = ({item, config, blockRendererConfig}: ColumnsProps): React.JSX.Element => {
    const currentConfig: ColumnsConfig = Object.assign({}, defaultConfig, config)

    const cols = item.data.cols.length;
    const innerBlocks = item.data.cols.map((col: OutputData, index: number) =>
        <div key={col.time + index.toString()} className={currentConfig.classNames?.innerBlocksContainers}>
            <BlockRenderer data={col} config={blockRendererConfig}/>
        </div>
    )

    return <section key={item.id} className={currentConfig.classNames?.outerContainer + " " + {
        2: currentConfig.classNames?.twoColumns,
        3: currentConfig.classNames?.threeColumns
    }[cols]}>{innerBlocks}</section>
};

export default ColumnsBlock;