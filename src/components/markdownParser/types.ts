export type ParserNameType = 'link' | 'header' | 'quote' | 'breakLine' | 'code'
export type ParserFnType = (str: string) => string
export type ParserType = {
   [key in ParserNameType] ?: ParserFnType
}
export interface MarkdownParserProps {
   value: string
}