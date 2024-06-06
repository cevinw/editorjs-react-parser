import React from 'react';
import {OutputBlockData} from "../BlockParser";

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

const defaultImageConfig : ImageConfig = {
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
    const currentConfig = Object.assign({}, defaultImageConfig, config)
    return <section className={currentConfig.classNames?.container}>
        <img className={currentConfig.classNames?.image}
               alt={item.data.caption}
               width={currentConfig.dimensions?.width}
               height={currentConfig.dimensions?.height}
               src={item.data.file.url}
        />
    </section>
};

export default ImageBlock;