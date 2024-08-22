import prettierPluginPackageJson from "prettier-plugin-packagejson";

/**
 * Explicitly define config options that can be overriden by an .editorconfig
 * Ref: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 *
 * @type {import("prettier").Config}
 */
const config = {
    endOfLine: "lf",
    trailingComma: "all",
    arrowParens: "always",
    semi: true,
    useTabs: false,
    singleQuote: false,
    tabWidth: 4,
    printWidth: 80,
    plugins: [prettierPluginPackageJson, "@ianvs/prettier-plugin-sort-imports"],
    importOrder: [
        "<BUILTIN_MODULES>",
        "^(react|next(.*))$",
        "<THIRD_PARTY_MODULES>",
        "<TYPES>",
        "",
        "^@/(.*)$",
        "^~/(.*)$",
        "^[./]",
        "<TYPES>^[.]",
        "^(.*)(sass|css|scss)$",
    ],
    importOrderParserPlugins: [
        "classProperties",
        "decorators-legacy",
        "jsx",
        "typescript",
    ],
};

export default config;
