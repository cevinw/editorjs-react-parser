import React from 'react';
import {OutputBlockData} from "../BlockParser";

/**
 * Error response
 */

export type ErrorConfig = {
    className?: string;
}

interface ErrorProps {
    item: OutputBlockData,
    config?: ErrorConfig
}

const defaultErrorConfig: ErrorConfig = {
    className: "mt-2 p-2 bg-red-300 text-red-900",
}

const ErrorBlock = ({item, config}: ErrorProps) : React.JSX.Element => {
    const currentConfig : ErrorConfig = Object.assign({}, defaultErrorConfig, config);
    return <div key={item.id} className={currentConfig.className}>ERROR: Can&apos;t parse item of
        type={item.type}</div>;
};

export default ErrorBlock;