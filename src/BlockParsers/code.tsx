import React from 'react';
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import railcasts from "react-syntax-highlighter/dist/esm/styles/hljs/railscasts";
import {OutputBlockData} from "../BlockRenderer";

/**
 * Output of the code block
 *
 * Default output just includes the "code"
 * "mode" is included if you're using @rxpm/editor-js-code
 * "language" is included if you're using @bomdi/codebox or codeflask
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

export interface CodeProps {
    item: OutputBlockData<EditorJsCode>,
    className?: string
    codeStyle?: { [key: string]: React.CSSProperties }
    languages? : CodeLanguage[]
    showLineNumbers?: boolean
}

const CodeBlock = ({item, className, codeStyle, languages, showLineNumbers}: CodeProps) : React.JSX.Element  => {
    let language = languages?.find(
        it =>
            it.shortName === item.data.mode ||
            it.language === item.data.language ||
            it.shortName === item.data.language)

    return <section key={item.id}
                    className={className ? className : "text-sm rounded-md overflow-hidden shadow-sm mt-2"}>
        {language &&
            <div className={"flex px-1 py-1 items-center bg-gray-300/15"}>
                <Image src={language.logoSrc} width={25} height={25} alt={language.logoAlt}/>
                <p className={"pl-2 text-gray-500"}>{language.displayText}</p>
            </div>
        }

        <SyntaxHighlighter
            language={language ? language.language : ""}
            style={codeStyle ? codeStyle : railcasts}
            showLineNumbers={showLineNumbers ? showLineNumbers : false}>
            {item.data.code}
        </SyntaxHighlighter>
    </section>;
};

export default CodeBlock;