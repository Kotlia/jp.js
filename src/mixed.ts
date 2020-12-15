import JP from "./index";
import fetch from 'node-fetch'

export const mixed = async (p: String | undefined): Promise<String | undefined> => {
    if (p === undefined) return
    return new Promise(res => {
        fetch(`http://www.google.com/transliterate?langpair=ja-Hira|ja&text=${encodeURIComponent(p.toString())}`)
            .then(r => r.json())
            .then(d => {
                let str = "";
                d.forEach((it: string[][]) => {
                    str += it[1][0]
                })
                res(str)
            })
    })
}