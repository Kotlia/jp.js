System.register(["node-fetch"], function (exports_1, context_1) {
    "use strict";
    var node_fetch_1, mixed;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (node_fetch_1_1) {
                node_fetch_1 = node_fetch_1_1;
            }
        ],
        execute: function () {
            exports_1("mixed", mixed = async (p) => {
                if (p === undefined)
                    return;
                return new Promise(res => {
                    node_fetch_1.default(`http://www.google.com/transliterate?langpair=ja-Hira|ja&text=${encodeURIComponent(p.toString())}`)
                        .then(r => r.json())
                        .then(d => {
                        let str = "";
                        d.forEach((it) => {
                            str += it[1][0];
                        });
                        res(str);
                    });
                });
            });
        }
    };
});
//# sourceMappingURL=mixed.js.map