System.register(["./tree"], function (exports_1, context_1) {
    "use strict";
    var tree_1, hiragana;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tree_1_1) {
                tree_1 = tree_1_1;
            }
        ],
        execute: function () {
            exports_1("hiragana", hiragana = (original) => {
                const str = original.replace(/[Ａ-Ｚａ-ｚ]/, s => String.fromCharCode(s.charCodeAt(0) - 65248)).toLowerCase();
                let result = '';
                let tmp = '';
                let index = 0;
                const len = str.length;
                let node = tree_1.TREE;
                const push = (char, toRoot = true) => {
                    result += char;
                    tmp = '';
                    node = toRoot ? tree_1.TREE : node;
                };
                while (index < len) {
                    const char = str.charAt(index);
                    if (char.match(/[a-z]/)) {
                        if (char in node) {
                            const next = node[char];
                            if (typeof next === 'string') {
                                push(next);
                            }
                            else {
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
                        if (node !== tree_1.TREE && char in tree_1.TREE) {
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
            });
        }
    };
});
//# sourceMappingURL=hiragana.js.map