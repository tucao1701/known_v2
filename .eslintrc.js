module.exports = {
  env: {
    browser: true,
    es2021 : true,
    node   : true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
  ],
  parserOptions: {
    //TODO あんま考えてないからあとでversion調整
    ecmaVersion: 12,
    parser     : "@typescript-eslint/parser",
    sourceType : "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules  : {
    semi         : ["error", "never"],
    // キャメルケースの強制
    camelcase    : ["error", {}],
    // objectの縦を揃える
    "key-spacing": [
      "error",
      {
        align: "colon",
      },
    ],
    "@typescript-eslint/indent"            : ["error", 2],
    // コンポーネント名をPascalCaseに強制
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/max-attributes-per-line"          : [
      "error",
      {
        multiline: {
          // タグの1行目に属性の定義を許可しない。
          allowFirstLine: false,
        },
      },
    ],
    // コンポーネントの props でキャメルケースを使いたいのでケバブケース強制を無効化。
    "vue/attribute-hyphenation": "off",
    "vue/eqeqeq"               : "error",
    "vue/space-infix-ops"      : "error",
    "vue/component-tags-order" : [
      "error",
      {
        order: ["template", "script", "style"],
      },
    ],
    // customではないcomponentへのkey付与は恐らく必要ないためoffにする
    // もちろんcustom-componentのkey無しは激ヤバのためvalid-v-forに任せる
    "vue/require-v-for-key": "off",

    "vue/html-closing-bracket-newline": [2, { multiline: "never" }],
  },
}
