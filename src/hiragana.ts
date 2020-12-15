import { TREE } from "./tree";

export const hiragana = (original: String): String => {
    const str = original.replace(/[Ａ-Ｚａ-ｚ]/, s => String.fromCharCode(s.charCodeAt(0) - 65248)).toLowerCase();
    let result = '';
    let tmp = '';
    let index = 0;
    const len = str.length;
    let node = TREE;
    const push = (char: string, toRoot = true) => {
        result += char;
        tmp = '';
        node = toRoot ? TREE : node;
    };
    while (index < len) {
        const char = str.charAt(index);
        if (char.match(/[a-z]/)) {
            if (char in node) {
                const next = node[char];
                if (typeof next === 'string') {
                    push(next);
                } else {
                    tmp += original.charAt(index);
                    node = next;
                }
                index++;
                continue;
            }
            const prev = str.charAt(index - 1);
            if (prev && (prev === 'n' || prev === char)) {
                push(prev === 'n' ? 'ン' : 'ッ', false);
            }
            if (node !== TREE && char in TREE) {
                push(tmp);
                continue;
            }
        }
        push(tmp + char);
        index++;
    }
    tmp = tmp.replace(/n$/, 'ン');
    push(tmp);
    return result;
}