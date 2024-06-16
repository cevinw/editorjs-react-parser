import React from 'react';
import AlertBlock, {AlertConfig} from "./BlockParsers/alert";
import ParagraphBlock, {ParagraphConfig} from "./BlockParsers/paragraph";
import CodeBlock, {CodeConfig} from "./BlockParsers/code";
import DelimiterBlock, {DelimiterConfig} from "./BlockParsers/delimiter";
import HeaderBlock from "./BlockParsers/header";
import ImageBlock, {ImageConfig} from "./BlockParsers/image";
import ColumnsBlock, {ColumnsConfig} from "./BlockParsers/columns";
import QuoteBlock, {QuoteConfig} from "./BlockParsers/quote";
import TableBlock, {TableConfig} from "./BlockParsers/table";
import ListBlock, {ListConfig} from "./BlockParsers/list";
import ErrorBlock, {ErrorConfig} from "./BlockParsers/error";
import Raw from "./BlockParsers/raw";


export interface BlockParserProps {
    data: OutputData;
    config?: BlockParserConfig
}

export interface BlockParserConfig {
    alert?: AlertConfig,
    code?: CodeConfig,
    columns?: ColumnsConfig,
    table?: TableConfig,
    image?: ImageConfig,
    paragraph?: ParagraphConfig,
    list?: ListConfig,
    quote?: QuoteConfig,
    delimiter?: DelimiterConfig,
    error?: ErrorConfig,
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

export const BlockParser = ({data, config}: BlockParserProps) =>
    data.blocks.map((blockData: OutputBlockData) => parseData(blockData, config));

const parseData = (item: OutputBlockData, config?: BlockParserConfig): React.JSX.Element => {
    return {
        "raw": <Raw key={item.id} item={item}/>,
        "header": <HeaderBlock key={item.id} item={item}/>,
        "code": <CodeBlock key={item.id} item={item} config={config?.code}/>,
        "list": <ListBlock key={item.id} item={item} config={config?.list}/>,
        "alert": <AlertBlock key={item.id} item={item} config={config?.alert}/>,
        "quote": <QuoteBlock key={item.id} item={item} config={config?.quote}/>,
        "table": <TableBlock key={item.id} item={item} config={config?.table}/>,
        "image": <ImageBlock key={item.id} item={item} config={config?.image}/>,
        "delimiter": <DelimiterBlock key={item.id} item={item} config={config?.delimiter}/>,
        "paragraph": <ParagraphBlock key={item.id} item={item} config={config?.paragraph}/>,
        "columns": <ColumnsBlock key={item.id} item={item} config={config?.columns} blockRendererConfig={config}/>
    }[item.type] || <ErrorBlock key={item.id} item={item} config={config?.error}/>
}

export default BlockParser;