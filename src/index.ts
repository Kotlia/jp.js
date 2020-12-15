import { hiragana } from "./hiragana";
import { mixed } from "./mixed";

export default class JP {

    original: String;
    hiragana: String | undefined;
    mixed: String | undefined;

    constructor(original: String) {
        this.original = original
    }

    private setOriginal(s: String) {
        this.original = s
        return this
    }

    private setHiragana(s: String) {
        this.hiragana = s
        return this
    }

    private setMixed(s: String) {
        this.mixed = s
        return this
    }

    toHiragana() {
        this.setHiragana(hiragana(this.original))
        return this
    }

    async toMixed() {
        await mixed(this.hiragana).then(res => this.setMixed(res!!))
        return this;
    }

    toObj() {
        return {
            origianl: this.original,
            hiragana: this.hiragana,
            mixed: this.mixed
        }
    }

    toString() {
        return this.mixed
    }
}