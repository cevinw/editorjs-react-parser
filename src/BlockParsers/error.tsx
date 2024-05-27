import React from 'react';
import {OutputBlockData} from "../BlockRenderer";

/**
 * Error response
 */

interface ErrorProps {
    item: OutputBlockData
}

const ErrorBlock = ({item}: ErrorProps) : React.JSX.Element => {
    return <div key={item.id} className={"mt-2 p-2 bg-red-300 text-red-900"}>ERROR: Can&apos;t parse item of
        type={item.type}</div>;
};

export default ErrorBlock;