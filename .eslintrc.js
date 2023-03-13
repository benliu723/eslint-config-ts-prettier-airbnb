const config = require(".");

module.exports = {
  env: {
    node: true,
  },
  ...config,
  rules: {
    "@typescript-eslint/no-var-requires": "off",
  },
};
