module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:svelte/recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  env: {
    browser: true,
  },
};
