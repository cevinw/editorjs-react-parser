import React from 'react';
import {OutputBlockData} from "../BlockParser";

/**
 * Output of a table block
 */

export type EditorJsTable = {
    withHeadings: boolean,
    content: Array<string[]>
}

export type TableConfig = {
    classNames: {
        tableHeader?: string,
        tableData?: string,
        table?: string
    }
}

const defaultTableConfig: TableConfig = {
    classNames: {
        tableHeader: "first:border-l-0 text-left pl-2 last:border-r-0 border-b-2 border",
        tableData: "first:border-l-0 last:border-r-0 pl-2 border-b border",
        table: "w-full",
    }
}

export interface TableProps {
    item: OutputBlockData<EditorJsTable>,
    config?: TableConfig
}

const TableBlock = ({item, config}: TableProps) : React.JSX.Element  => {
    const currentConfig = Object.assign({}, defaultTableConfig, config)
    const rows = item.data.content.map((rowArray: string[], index: number) => {
        const rowItems = rowArray.map((text: string, index2: number) =>
            item.data.withHeadings && index === 0 ?
                <th className={currentConfig.classNames.tableHeader}
                    key={index2}>{text}</th> :
                <td className={currentConfig.classNames.tableData} key={index2}>{text}</td>)
        return <tr key={index}>{rowItems}</tr>
    })
    return <table className={currentConfig.classNames.table} key={item.id}>
        <tbody>{rows}</tbody>
    </table>
};

export default TableBlock;