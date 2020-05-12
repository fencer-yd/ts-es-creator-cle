const eslint = require("./lints/eslint");
const tslint = require("./lints/tslint.json");

module.exports = {
  overrides: [
    { ...eslint, files: ["*.js", "*.jsx"] },
    { ...tslint, files: ["*.ts", "*.tsx"] },
  ],
};
