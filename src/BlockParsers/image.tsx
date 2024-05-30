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

export type ImageConfig = {
    classNames?: {
        container?: string,
        image?: string,
    },
    dimensions?: {
        width?: number,
        height?: number,
    },
}

const defaultConfig : ImageConfig = {
    classNames: {
        image: "rounded justify-self-center dark:dark:opacity-75",
        container: "grid mt-2"
    },
    dimensions: {
        width: 500,
        height: 500
    }
}

export interface ImageProps {
    item: OutputBlockData<EditorJsImage>,
    config?: ImageConfig
}

const ImageBlock = ({item, config}: ImageProps) : React.JSX.Element  => {
    const currentConfig = Object.assign({}, defaultConfig, config)
    return <section className={currentConfig.classNames?.container}>
        <Image className={currentConfig.classNames?.image}
               alt={item.data.caption}
               width={currentConfig.dimensions?.width}
               height={currentConfig.dimensions?.height}
               src={item.data.file.url}
        priority={true}/>
    </section>
};

export default ImageBlock;