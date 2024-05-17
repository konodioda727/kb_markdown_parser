import {ParserFnType, ParserType} from "./types";

const parseLink: ParserFnType = (str) => {
    return str
        ? str.replace(/(`?)(!?)\[(.*)]\((.+)\)/gi, (...props) => {
            switch (props[0].trim()[0]) {
                case '[': return `<a href="${props[4]}" >${props[3]}</a>`;
                case '!': return `<img src="${props[4]}" alt="${props[3]}"/>`;
                default: return props[0];
            }
    }) : '';
}
const parseCode: ParserFnType = (str) => {
    console.log(str)
    return str.replace(/(`*)(.*)(`*)`/ig, (...props) => {
        return props[1] === props[3]
            ? `<code class="bg-amber-200">${props[2]}</code>`
            : props[0]
    })
}

const defaultParsers: ParserType = {
    link: parseLink,
    code: parseCode,
}

export default defaultParsers