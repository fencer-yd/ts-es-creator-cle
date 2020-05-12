#!/usr/bin/env node
const program = require("commander");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const { exec } = require("child_process");

program.version("0.0.1").parse(process.argv);

let questions = [
  {
    type: "list",
    name: "eslint_type",
    message: "请选择当前存在的lint类型 ",
    choices: ["es", "ts"],
  },
  {
    type: "list",
    name: "file_type",
    message: "当前lint文件类型",
    choices: ["json", "js"],
  },
  {
    type: "input",
    name: "lint_path",
    message: "请输入lint文件当前路径",
  },
];

const sourceEslint = "./source_lints/eslint.js";
const sourceTslint = "./source_lints/tslint.js";
const tsconfig = "./types/tsconfig.json";

const DIR_PATH = process.mainModule.path;
const dir = "./lints";
const vscodeDir = "./.vscode";
const vscodeFile = "./.vscode/setting.json";

const tsconfigMove = (callback) => {
  fs.move(tsconfig, "./tsconfig.json", () => {
    callback && callback();
  });
};

const packageHandle = () => {
  fs.readJSON("./package.json", (err, packageObj) => {
    if (err) console.log(err);
    const package = {
      ...packageObj,
    };
    if (!package["devDependencies"]) package["devDependencies"] = {};
    package["devDependencies"]["typescript"] = "^3.8.2";
    package["devDependencies"]["@typescript-eslint/eslint-plugin"] = "^2.26.0";
    package["devDependencies"]["@typescript-eslint/parser"] = "^2.26.0";
    package["devDependencies"]["babel-eslint"] = "^10.1.0";
    if (!package["dependencies"]) package["dependencies"] = {};
    package["dependencies"]["@types/lodash"] = "^4.14.149";
    package["dependencies"]["@types/react"] = "^16.9.22";
    package["dependencies"]["@types/react-dom"] = "^16.9.5";

    package["scripts"]["lint"] =
      "eslint src --ext .jsx,.js,.ts,.tsx --config .eslintrc.js";
    package["scripts"]["fix"] =
      "eslint src --fix --ext .jsx,.js,.ts,.tsx --config .eslintrc.js";
    package["scripts"]["precommit"] = "npm run lint";

    fs.writeJson("./package.json", package);
  });
};

const allLintHandle = (esType, fileType) => {
  switch (fileType) {
    case "json":
      fs.move(`./source_lints_all/${esType}JsonLint.js`, "./.eslintrc.js");
      break;
    case "js":
      fs.move(`./source_lints_all/jslint.js`, "./.eslintrc.js");
      break;
  }
};

const handleVscode = () => {
  fs.ensureDir(vscodeDir).then(() => {
    console.log("vscode文件夹已创建");
    fs.move(vscodeFile, "./vscode");
  });
};

inquirer.prompt(questions).then(async function (ans) {
  const { eslint_type, file_type, lint_path } = ans;
  fs.ensureDir(dir)
    .then(() => {
      console.log("文件夹lints已创建完毕");
      fs.move(lint_path, `${dir}/${eslint_type}lint.${file_type}`, (err) => {
        if (err) console.log("你的文件没有找到，看看是不是lint路径写的不对");
        else {
          console.log(`${eslint_type}lint文件迁移成功`);
          switch (eslint_type) {
            case "es":
              fs.move(sourceTslint, `${dir}/tslint.js`, (err) => {
                if (err) !console.log(err);
                else {
                  console.log("tslint文件迁移成功");
                }
              });
              break;
            case "ts":
              fs.move(sourceEslint, `${dir}/eslint.js`, (err) => {
                if (err) !console.log(err);
                else {
                  console.log("tslint文件迁移成功");
                }
              });
              break;
          }
          allLintHandle(eslint_type, file_type);
          tsconfigMove();
          packageHandle();
          handleVscode();
          exec("npm i");
          exec("npm uninstall ts-es-creator-cli --save-dev");
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
