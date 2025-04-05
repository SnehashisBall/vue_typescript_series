import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default defineConfig({
  files: ["**/*.{js,mjs,cjs,ts,vue}"],
  languageOptions: {
    globals: globals.browser,
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      parser: tseslint.parser
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    tseslint.configs.recommended,
    pluginVue.configs["flat/essential"]
  ],
  rules: {
    "space-infix-ops": ["error", { "int32Hint": false }],
    "comma-spacing": ["error", { "before": false, "after": true }]
  }
});
