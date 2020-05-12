module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "babel-eslint",
  plugins: ["prettier", "react", "react-hooks"],
  files: ["*.js", "*.jsx"],
  rules: {
    "prettier/prettier": "warn",
    "no-console": "off",
    "no-debugger": "warn",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-find-dom-node": "off",
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
  },
};
