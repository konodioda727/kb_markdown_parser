import React, { useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { config } from 'md-editor-rt';
import anchor from 'markdown-it-anchor';
import { lineNumbers } from '@codemirror/view';
import {EditorProps} from "./types.ts";
import {toolbarConfig} from "./editor.config.tsx";

config({
    codeMirrorExtensions(_theme, extensions) {
        return [...extensions, lineNumbers()];
    },
    markdownItConfig(mdit) {
        mdit.use(anchor, {
            permalink: true
        });
    }
});

const Editor: React.FC<EditorProps> = () => {
    const [text, setText] = useState('# Hello Editor');
    return (
        <>
            <MdEditor previewTheme='kb' toolbars={toolbarConfig} modelValue={text} onChange={setText} />
        </>
    );
};

export default Editor