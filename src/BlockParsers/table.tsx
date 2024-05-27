import React from 'react';
import {OutputBlockData} from "../BlockRenderer";

/**
 * Output of a table block
 */

export type EditorJsTable = {
    withHeadings: boolean,
    content: Array<string[]>
}

export interface TableProps {
    item: OutputBlockData<EditorJsTable>,
    className?: string
}

const TableBlock = ({item, className}: TableProps) : React.JSX.Element  => {
    let rows = item.data.content.map((rowArray: string[], index: number) => {
        let rowItems = rowArray.map((text: string, index2: number) =>
            item.data.withHeadings && index === 0 ?
                <th className={"first:border-l-0 text-left pl-2 last:border-r-0 border-b-2 border"}
                    key={index2}>{text}</th> :
                <td className={"first:border-l-0 last:border-r-0 pl-2 border-b border"} key={index2}>{text}</td>)
        return <tr key={index}>{rowItems}</tr>
    })
    return <table className={className ? className : "w-full"} key={item.id}>
        <tbody>{rows}</tbody>
    </table>
};

export default TableBlock;