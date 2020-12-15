System.register(["./hiragana", "./mixed"], function (exports_1, context_1) {
    "use strict";
    var hiragana_1, mixed_1, JP;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (hiragana_1_1) {
                hiragana_1 = hiragana_1_1;
            },
            function (mixed_1_1) {
                mixed_1 = mixed_1_1;
            }
        ],
        execute: function () {
            JP = class JP {
                constructor(original) {
                    this.original = original;
                }
                setOriginal(s) {
                    this.original = s;
                    return this;
                }
                setHiragana(s) {
                    this.hiragana = s;
                    return this;
                }
                setMixed(s) {
                    this.mixed = s;
                    return this;
                }
                toHiragana() {
                    this.setHiragana(hiragana_1.hiragana(this.original));
                    return this;
                }
                async toMixed() {
                    await mixed_1.mixed(this.hiragana).then(res => this.setMixed(res));
                    return this;
                }
                toObj() {
                    return {
                        origianl: this.original,
                        hiragana: this.hiragana,
                        mixed: this.mixed
                    };
                }
                toString() {
                    return this.mixed;
                }
            };
            exports_1("default", JP);
        }
    };
});
//# sourceMappingURL=index.js.map