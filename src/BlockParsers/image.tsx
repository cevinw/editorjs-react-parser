import React from 'react';
import Image from "next/image";
import {OutputBlockData} from "../BlockRenderer";

/**
 * Output of a image block
 */

export type EditorJsImage = {
    file: {
        url: string
    },
    caption: string,
    withBorder: boolean,
    stretched: boolean,
    withBackground: boolean
}

export interface ImageProps {
    item: OutputBlockData<EditorJsImage>,
    className?: string
}

const ImageBlock = ({item, className}: ImageProps) : React.JSX.Element  => {
    return <section className={"grid mt-2"}>
        <Image className={className ? className : "rounded justify-self-center dark:dark:opacity-75"}
               alt={item.data.caption}
               width={500}
               height={500} src={item.data.file.url}/>
    </section>
};

export default ImageBlock;