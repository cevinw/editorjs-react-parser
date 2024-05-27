import React from 'react';
import AlertBlock from "./BlockParsers/alert";
import ParagraphBlock from "./BlockParsers/paragraph";
import CodeBlock, {CodeLanguage} from "./BlockParsers/code";
import DelimiterBlock from "./BlockParsers/delimiter";
import HeaderBlock from "./BlockParsers/header";
import ImageBlock from "./BlockParsers/image";
import ColumnsBlock from "./BlockParsers/columns";
import QuoteBlock from "./BlockParsers/quote";
import TableBlock from "./BlockParsers/table";
import ListBlock from "./BlockParsers/list";
import ErrorBlock from "./BlockParsers/error";


export interface ArticleRenderProps {
    data: OutputData;
    config?: BlockRendererConfig
}

export interface BlockRendererConfig {
    alert?: { className: string },
    code?: {
        className?: string,
        codeStyle?: { [key: string]: React.CSSProperties }
        languages?: CodeLanguage[],
        showLineNumbers?: boolean,
    },
    table?: { className: string },
    image?: { className: string },
    header?: { className: string },
    paragraph?: { className: string },
    list?: { className: string },
    quote?: { className: string },
    delimiter?: { className: string }
}

export interface OutputBlockData<Data extends object = any> {

    id?: BlockId;
    type: string;
    data: BlockToolData<Data>;
    tunes?: { [name: string]: BlockTuneData };
}

export interface OutputData {

    version?: string;
    time?: number;
    blocks: OutputBlockData[];
}

export type BlockId = string;
export type BlockToolData<T extends object = any> = T;
export type BlockTuneData = any;

const BlockRenderer = ({data, config}: ArticleRenderProps) =>
    data.blocks.map((blockData: OutputBlockData) => parseData(blockData, config));

const parseData = (item: OutputBlockData, config?: BlockRendererConfig): React.JSX.Element => {
    return {
        "code": <CodeBlock key={item.id} item={item} {...config?.code}/>,
        "paragraph": <ParagraphBlock key={item.id} item={item} {...config?.paragraph}/>,
        "header": <HeaderBlock key={item.id} item={item} {...config?.header}/>,
        "alert": <AlertBlock key={item.id} item={item} {...config?.alert}/>,
        "columns": <ColumnsBlock key={item.id} item={item} config={config}/>,
        "quote": <QuoteBlock key={item.id} item={item} {...config?.quote}/>,
        "table": <TableBlock key={item.id} item={item} {...config?.table}/>,
        "list": <ListBlock key={item.id} item={item} {...config?.list}/>,
        "delimiter": <DelimiterBlock key={item.id} item={item} {...config?.delimiter}/>,
        "image": <ImageBlock key={item.id} item={item} {...config?.image}/>
    }[item.type] || <ErrorBlock item={item} key={item.id}/>
}

export default BlockRenderer;