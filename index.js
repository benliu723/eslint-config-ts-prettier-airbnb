"use strict";

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        tabWidth: 4,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        endOfLine: "auto",
      },
      { usePrettierrc: false },
    ],
  },
};
