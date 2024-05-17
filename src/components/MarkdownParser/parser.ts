import {ParserFnType, ParserNameType, ParserType} from "./types";
import defaultParsers from "./defaultParsers.ts";

export class Parser {
    private _parsers: ParserType
    constructor(parsers?: ParserType) {
        this._parsers = parsers || defaultParsers
    }
    setParser(name: ParserNameType, fn: ParserFnType) {
        this._parsers[name] = fn
    }
    parse(inputStr: string) {
        const parserEntries = Object.entries(this._parsers)
        return parserEntries.reduce((acc, cur) => {
            console.log('now processing ',cur[0])
            return cur[1](acc)
        }, inputStr)
    }
}