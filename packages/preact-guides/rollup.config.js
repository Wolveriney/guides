import builder from "@daybrush/builder";
const preact = require("rollup-plugin-preact");


const defaultOptions = {
    tsconfig: "tsconfig.build.json",
    external: {
        "@daybrush/utils": "utils",
        "@daybrush/drag": "Dragger",
        "preact": "Preact",
        "preact-compat": "preact-compat",
        "framework-utils": "framework-utils",
        "preact-css-styler": "preact-css-styler",
        "@egjs/agent": "eg.Agent",
        "@egjs/children-differ": "eg.ChildrenDiffer",
    },
    exports: "named",
    plugins: [
        preact({
            noPropTypes: false,
            noEnv: false,
            noReactIs: false,
            usePreactX: false,
            aliasModules: {
                "react-css-styler": "preact-css-styler",
            },
        }),
    ],
};

export default builder([
    {
        ...defaultOptions,
        input: "src/preact-guides/index.esm.ts",
        output: "./dist/guides.esm.js",
        format: "es",
    },
    {
        ...defaultOptions,
        input: "src/preact-guides/index.umd.ts",
        output: "./dist/guides.cjs.js",
        format: "cjs",
        exports: "default",
    },
]);