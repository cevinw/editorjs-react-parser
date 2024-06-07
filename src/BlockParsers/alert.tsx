import parse from "html-react-parser";
import React from "react";
import {OutputBlockData} from "../BlockParser";

/**
 * Output of the alert block type
 */

export type EditorJsAlert = {
    type: AlertType,
    align: AlertAlignment
    message: string
}

export enum AlertAlignment {
    left = "left",
    right = "right",
    center = "center",
}

export enum AlertType {
    info = "info",
    success = "success",
    danger = "danger",
    light = "light",
    dark = "dark",
    warning = "warning",
    primary = "primary"
}

export type AlertConfig = {
    classNames?: {
        baseElement?: string
        info?: string,
        success?: string,
        danger?: string,
        light?: string,
        dark?: string,
        warning?: string,
        primary?: string,
        textCenter?: string,
        textRight?: string,
        textLeft?: string,
    }
}

const defaultAlertConfig: AlertConfig = {
    classNames: {
        baseElement: "mt-2 p-2 mt-2 px-4 flex bg-opacity-50 shadow-sm rounded-lg",
        info: "mt-2 bg-gray-300 text-gray-600",
        success: "mt-2 bg-green-100 text-green-800",
        danger: "mt-2 bg-red-200 text-red-800",
        light: "mt-2 bg-white text-gray-600",
        dark: "mt-2 bg-gray-900 text-gray-300 bg-opacity-85",
        warning: "mt-2 bg-orange-100 text-orange-800",
        primary: "mt-2 bg-gray-300 text-gray-600",
        textCenter: "text-center",
        textRight: "text-right",
        textLeft: "",
    }
}

export interface AlertProps {
    item: OutputBlockData<EditorJsAlert>,
    config?: AlertConfig
}

const AlertBlock = ({item, config}: AlertProps): React.JSX.Element => {
    // Assign all defined config values to default config
    const currentConfig: AlertConfig = Object.assign({}, defaultAlertConfig, config)
    const classNames = currentConfig.classNames;
    return (
        <figure key={item.id}
                className={classNames?.baseElement + " " + {
                    [AlertType.info]: classNames?.info,
                    [AlertType.success]: classNames?.success,
                    [AlertType.danger]: classNames?.danger,
                    [AlertType.light]: classNames?.light,
                    [AlertType.dark]: classNames?.dark,
                    [AlertType.warning]: classNames?.warning,
                    [AlertType.primary]: classNames?.primary,
                }[item.data.type]}>
            <figcaption className={{
                [AlertAlignment.center]: classNames?.textCenter,
                [AlertAlignment.right]: classNames?.textRight,
                [AlertAlignment.left]: classNames?.textLeft
            }[item.data.align]}>
                {parse(item.data.message)}
            </figcaption>
        </figure>
    );
};

export default AlertBlock;
