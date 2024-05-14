import React from "react";
import {Parser} from "./parser";
import {MarkdownParserProps} from "./types";
const MarkdownParser: React.FC<MarkdownParserProps> = ({value}) => {
    const parser = new Parser();
    return (
        <div className='w-full h-full rounded-lg shadow ' dangerouslySetInnerHTML={{__html: parser.parse(value)}}>
        </div>
    )
}

export default MarkdownParser