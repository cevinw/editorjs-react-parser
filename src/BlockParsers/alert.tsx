import parse from "html-react-parser";
import React from "react";
import {OutputBlockData} from "../BlockRenderer";

/**
 * Output of the alert block type
 */

export type EditorJsAlert = {
    type: string,
    align: string
    message: string
}

export interface AlertProps {
    item: OutputBlockData<EditorJsAlert>,
    className?: string
}

const AlertBlock = ({item, className}: AlertProps) : React.JSX.Element => {
    return (
        <section key={item.id} className={className ? className : "p-2 mt-2 px-4 flex bg-opacity-50 shadow-sm rounded-lg " + {
            "info": "bg-gray-300 text-gray-600",
            "success": "bg-green-100 text-green-800",
            "danger": "bg-red-200 text-red-800",
            "light": "bg-white text-gray-600",
            "dark": "bg-gray-900 text-gray-300 bg-opacity-85",
            "warning": "bg-orange-100 text-orange-800",
            "primary": "bg-gray-300 text-gray-600"
        }[item.data.type]}>
            <div className={{"center": "text-center", "right": "text-right"}[item.data.align]}>
                {parse(item.data.message)}
            </div>
        </section>
    );
};

export default AlertBlock;
