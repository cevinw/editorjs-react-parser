import React from 'react';
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import railcasts from "react-syntax-highlighter/dist/esm/styles/hljs/railscasts";
import {OutputBlockData} from "../BlockRenderer";

/**
 * Output of the code block
 *
 * Default output just includes the "code" field
 *
 * "mode" is included if you're using @rxpm/editor-js-code
 * "language" is included if you're using @bomdi/codebox or @calumk/editorjs-codeflask (note that "theme" is omitted)
 *
 * This parser should support most editorJS code block tools
 */

export type EditorJsCode = {
    code: string,
    mode?: string
    language?: string,
}

export type CodeLanguage = {
    shortName: string,
    language: string
    logoSrc: string,
    logoAlt: string,
    displayText: string,
}


/**
 * Changes the default configured values for a code block
 *
 * Code styles can be found under react-syntax-highlighter, these objects can be passed directly to "codeStyle"
 *
 * Only fields set will be overridden
 */
export type CodeConfig = {
    classNames?: {
        container?: string,
        languageInfoBar?: string,
        languageInfoBarText?: string,
    }
    codeStyle?: { [key: string]: React.CSSProperties }
    languages?: CodeLanguage[],
    showLineNumbers?: boolean,

}

const defaultCodeConfig: CodeConfig = {
    classNames: {
        container: "text-sm rounded-md overflow-hidden shadow-sm mt-2",
        languageInfoBar: "flex px-1 py-1 items-center bg-gray-300/15",
        languageInfoBarText: "pl-2 text-gray-500"
    },
    codeStyle: railcasts,
    languages: [],
    showLineNumbers: false,
}

export interface CodeProps {
    item: OutputBlockData<EditorJsCode>,
    config?: CodeConfig,
}

const CodeBlock = ({item, config}: CodeProps): React.JSX.Element => {
    const currentConfig: CodeConfig = Object.assign({}, defaultCodeConfig, config)
    const language: CodeLanguage | undefined = currentConfig.languages?.find(
        it =>
            it.shortName === item.data.mode ||
            it.language === item.data.language ||
            it.shortName === item.data.language)

    return <figure key={item.id}
                   className={currentConfig.classNames?.container}>
        {language &&
            <div className={currentConfig.classNames?.languageInfoBar}>
                <img src={language.logoSrc} width={25} height={25} alt={language.logoAlt}/>
                <figcaption
                    className={currentConfig.classNames?.languageInfoBarText}>{language.displayText}</figcaption>
            </div>
        }

        <SyntaxHighlighter
            language={language ? language.language : ""}
            style={currentConfig.codeStyle}
            showLineNumbers={currentConfig.showLineNumbers}>
            {item.data.code}
        </SyntaxHighlighter>
    </figure>;
};

export default CodeBlock;