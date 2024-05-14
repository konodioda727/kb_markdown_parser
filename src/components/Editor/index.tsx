import { useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { config } from 'md-editor-rt';
import anchor from 'markdown-it-anchor';
import { lineNumbers } from '@codemirror/view';

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

export default () => {
    const [text, setText] = useState('# Hello Editor');
    return <MdEditor toolbars={[
        'revoke',
        'next',
        'bold',
        'underline',
        'italic',
        '-',
        'strikeThrough',
        'title',
        'sub',
        'sup',
        'quote',
        'unorderedList',
        'orderedList',
        'task', // ^2.4.0
        '-',
        'codeRow',
        'code',
        'link',
        'image',
        'table',
        'mermaid',
        'katex',

        '=',
        'save',
        'preview',
    ]} modelValue={text} onChange={setText} />;
};