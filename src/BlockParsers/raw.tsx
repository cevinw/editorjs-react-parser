import parse from "html-react-parser";
import {OutputBlockData} from "../BlockParser";

export type EditorJsRaw = {
    html: string
}

export interface RawProps {
    item: OutputBlockData<EditorJsRaw>
}

const Raw = ({item} : RawProps) => {
    return parse(item.data.html);
};

export default Raw;