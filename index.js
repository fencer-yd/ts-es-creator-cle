#!/usr/bin/env node
const program = require("commander");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const { exec } = require("child_process");
const log = require("console-emoji");
const { packageHandle, eslintPackageInstall } = require("./npm_config");

program.version("1.0.2").parse(process.argv);

let questions = [
  {
    type: "input",
    name: "lint_path",
    message: "😁请输入lint文件当前路径",
  },
];

const sourcePath = process.mainModule.path;
let targetPath = process.env.PWD;

exec("pwd", (err, pwd) => {
  if (err) log(err, "err");
  else targetPath = targetPath || pwd.trim();
});

const sourceEslint = `${sourcePath}/source_lints/eslint.js`;
const sourceTslint = `${sourcePath}/source_lints/tslint.js`;
const tsconfig = "/types/tsconfig.json";

const vscodeDir = `${sourcePath}/.vscode`;
const vscodeFile = `${sourcePath}/.vscode/setting.json`;

const dir = `./lints`;

const tsconfigMove = (callback) => {
  fs.copy(`${sourcePath}${tsconfig}`, `${targetPath}/tsconfig.json`, () => {
    callback && callback();
  });
};

const allLintHandle = () => {
  fs.copy(
    `${sourcePath}/source_lints_all/jslint.js`,
    `${targetPath}/.eslintrc.js`,
    (err) => {
      if (err) log(err, "err");
      else log(":sparkles: eslint迁移成功", "ok");
    }
  );
  exec("rm -rf .prettierrc");
  exec("rm -rf .prettierrc.js");
  exec("rm -rf .prettierrc.json");
  fs.copy(
    `${sourcePath}/prettier/.prettierrc.js`,
    `${targetPath}/.prettierrc.js`,
    (err) => {
      if (err) log(err, "err");
      else log(":sparkles: prettier迁移成功", "ok");
    }
  );

  exec("rm -rf .editorconfig");
  fs.copy(
    `${sourcePath}/prettier/.editorconfig`,
    `${targetPath}/.editorconfig`,
    (err) => {
      if (err) log(err, "err");
      else log(":sparkles: editorconfig创建成功", "ok");
    }
  );
};

const handleVscode = () => {
  fs.ensureDir(vscodeDir).then(() => {
    fs.copy(vscodeFile, `${targetPath}/.vscode/setting.json`, (err) => {
      if (!err) log(":sparkles: vscode配置已创建", "ok");
    });
  });
};

const lintHandle = (ans, callback) => {
  const { lint_path } = ans;
  fs.ensureDir(dir).then(() => {
    log(":sparkles: 文件夹lints已创建完毕", "ok");
    exec(`rm -rf ${lint_path}`, (err, info, warn) => {
      if (err) log("🐖 你的文件没有找到，看看是不是lint路径写的不对", "err");
      else {
        log("本地eslint删除成功");
      }
    });
    fs.copy(sourceTslint, `${dir}/tslint.js`, (err) => {
      if (err) !log(err, "err");
      else {
        log(":sparkles: tslint文件迁移成功", "ok");
      }
    });
    fs.copy(sourceEslint, `${dir}/eslint.js`, (err) => {
      if (err) !log(err, "err");
      else {
        log(":sparkles: tslint文件迁移成功", "ok");
      }
    });
    callback && callback();
  });
};

inquirer.prompt(questions).then(async function (ans) {
  lintHandle(ans, () => {
    allLintHandle();
    tsconfigMove();
    packageHandle();
    eslintPackageInstall();
    handleVscode();
  });
});
