# EditorJs react parser

> A renderer for editorjs block data to react components

This project aims to simplify rendering correct semantic html tags out of editorjs output data to react elements

The goal is to support all block types and tunes specified in the [awesome list](https://github.com/editor-js/awesome-editorjs/tree/master), currently this project supports these block tools.

- [@editorjs/paragraph](https://github.com/editor-js/paragraph)
- [@editorjs/header](https://github.com/editor-js/header)
- [@editorjs/quote](https://github.com/editor-js/quote)
- [@editorjs/delimiter](https://github.com/editor-js/delimiter)
- [editorjs-alert](https://github.com/vishaltelangre/editorjs-alert)
- [@editorjs/list](https://github.com/editor-js/list)
- [@editorjs/image](https://github.com/editor-js/image)
- [@editorjs/table](https://github.com/editor-js/table)
- [@editorjs/code](https://github.com/editor-js/code)
- [@bomdi/codebox](https://github.com/BomdiZane/codebox)
- [@calumk/editorjs-codeflask](https://github.com/calumk/editorjs-codeflask)
- [@rxpm/editor-js-code](https://github.com/rajatxs/editor-js-code)
- [@calumk/editorjs-columns](https://github.com/calumk/editorjs-columns)
- [@editorjs/text-variant-tune](https://github.com/editor-js/text-variant-tune)
- [@editorjs/raw](https://github.com/editor-js/raw)

This whole component can function as both a server component or client component.

> **Installation** ♥
>
> ```
> npm i editor-react-parser
> ```

> [!TIP]
> If you wish to use the default tailwind styling include this in your tailwind.config file
>
> ```json
> "content": [
>   "./node_modules/editor-react-parser/dist/*/**.{js,ts}",
> ]
> ```

## Usage

This parser is built to be flexible but with a low bar of entry.

Add this component to any other component. And feed it with the complete output data object from editor js

```tsx
<BlockParser data={editorJsData} />
```

This component allows all styles and default config to be overriden by a config object.
If you are using typescript you can use the included type BlockParserConfig to get hints on what can be done.

> [!NOTE] > **Only the fields you override will override the default config**

```tsx
import React from "react";
import BlockParser, { OutputData } from "editor-react-parser";

const Example = () => {
  const editorJsData: OutputData = {
    version: "2.29.1",
    time: new Date().getTime(),
    blocks: [
      {
        id: "Kp5hXEi74T",
        type: "paragraph",
        data: {
          text: "test paragraph",
        },
      },
    ],
  };
  return (
    <div>
      <BlockParser data={editorJsData} />
    </div>
  );
};

export default Example;
```

### Classes and styling

The Editor Js react parser relies on using tailwind styles to render some components,
if you do not wish to use tailwind you should include classes for components through the configuration object
Components such as columns rely on using grid-cols from tailwind in order to correctly render multiple columns.

### Configuring code syntax highlighting

We strongly recommend you to configure the syntax highlighting if you wish to use it.
If this parser is used with [@rxpm/editor-js-code](https://github.com/rajatxs/editor-js-code)
or other code tools providing languages you could add the following configurations

```tsx
code: {
  languages: [
    {
      language: "rust",
      displayText: "Rust",
      logoAlt: "rust logo",
      logoSrc: "/code-logos/rust.svg",
      shortName: "rs",
    },
    {
      language: "python",
      displayText: "Python",
      logoAlt: "Python logo",
      logoSrc: "/code-logos/python.svg",
      shortName: "py",
    },
    {
      language: "typescript",
      displayText: "Typescript",
      logoAlt: "Typescript logo",
      logoSrc: "/code-logos/typescript.svg",
      shortName: "ts",
    },
    {
      language: "java",
      displayText: "Java",
      logoAlt: "Java logo",
      logoSrc: "/code-logos/java.svg",
      shortName: "java",
    },
    {
      language: "typescript",
      displayText: "Typescript [tsx]",
      logoAlt: "tsx logo",
      logoSrc: "/code-logos/react.svg",
      shortName: "tsx",
    },
  ];
}
```

The logo src in this particular configuration will use the "./public" folder and produce something looking like this
![code example](https://github.com/cevinw/editorjs-react-parser/assets/170200358/19ff9f0c-7a28-4e9b-8a6f-5d00779dd6cd)

> [!TIP]
> You can use [devicon](https://devicon.dev/) resource to find good quality svg code logos.

Example of the tools object configuration

```ts
 code: {
    class: CodeTool,
        config: {
        modes: {
            'ts': 'TypeScript',
            'py': 'Python',
            'rs': 'Rust',
            'tsx': 'TypeScriptXML',
            'java' : "Java"
        },
        defaultMode: 'ts'
    }
},
```

##### Custom code style

You can add custom styles using react syntax highlighter styles. this can be done by adding the following configuration

```tsx
import { idea } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const Example = () => {
  const config: BlockParserConfig = {
    code: { codeStyle: idea },
  };
  return (
    <div>
      <BlockParser data={editorJsData} config={config} />
    </div>
  );
};
```

### Inline tools

Since this parser uses html-react-parser in certain elements a lot of inline tools might work as intended.

## Contributing

We welcome all contributors.
To contribute clone the repo, create a new branch. Add your code and tests and submit a pull request.

A big thank you to all who might want to contribute 💖
