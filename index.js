#!/usr/bin/env node
const program = require("commander");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const { exec } = require("child_process");
const log = require("./log");
const { packageHandle, eslintPackageInstall } = require("./npm_config");

program.version("1.0.2").parse(process.argv);

const sourcePath = process.mainModule.path;
let targetPath = process.env.PWD;

const sourceEslint = `${sourcePath}/source_lints/eslint.js`;
const sourceTslint = `${sourcePath}/source_lints/tslint.js`;
const sourceAllLint = `${sourcePath}/source_lints_all/jslint.js`;
const sourcePrettier = `${sourcePath}/prettier/.prettierrc.js`;
const sourceEditorconfig = `${sourcePath}/prettier/.editorconfig`;
const tsconfig = "/types/tsconfig.json";

const vscodeDir = `${sourcePath}/.vscode`;
const vscodeFile = `${sourcePath}/.vscode/setting.json`;

const dir = `./lints`;

const tsconfigMove = () => {
  fs.copy(`${sourcePath}${tsconfig}`, `${targetPath}/tsconfig.json`);
};

const allLintHandle = () => {
  fs.copy(sourceAllLint, `${targetPath}/.eslintrc.js`, (err) => {
    if (err) log(err, "err");
    else log("✨ eslint迁移成功", "ok");
  });
  exec("rm -rf .prettierrc");
  exec("rm -rf .prettierrc.json");
  fs.copy(sourcePrettier, `${targetPath}/.prettierrc.js`, (err) => {
    if (err) log(err, "err");
    else log("✨ prettier迁移成功", "ok");
  });

  fs.copy(sourceEditorconfig, `${targetPath}/.editorconfig`, (err) => {
    if (err) log(err, "err");
    else log("✨ editorconfig创建成功", "ok");
  });
};

const handleVscode = () => {
  fs.ensureDir(vscodeDir).then((err) => {
    if (err) log("vscode文件夹已存在");
    fs.copy(vscodeFile, `${targetPath}/.vscode/setting.json`, (err) => {
      if (!err) log("✨ vscode配置已创建", "ok");
    });
  });
};

const lintHandle = (callback) => {
  fs.ensureDir(dir).then(() => {
    log("✨ 文件夹lints已创建完毕", "ok");

    fs.copy(sourceTslint, `${dir}/tslint.js`, (err) => {
      if (err) !log(err, "err");
      else {
        log("✨ tslint文件迁移成功", "ok");
      }
    });
    fs.copy(sourceEslint, `${dir}/eslint.js`, (err) => {
      if (err) !log(err, "err");
      else {
        log("✨ eslint文件迁移成功", "ok");
      }
    });
    callback && callback();
  });
};

exec("pwd", (err, pwd) => {
  if (err) log(err, "err");
  else targetPath = targetPath || pwd.trim();
  exec("find . -maxdepth 1 -name '*eslint*' -d", (err, info, warn) => {
    if (!err) {
      const eslintList = info.split(/\n/);
      eslintList.forEach((item) => {
        if (item.indexOf("ignore") < 0) {
          exec(`rm -rf ${item}`);
        }
      });
    }
    lintHandle(() => {
      allLintHandle();
      tsconfigMove();
      packageHandle(targetPath, () => {
        eslintPackageInstall();
        handleVscode();
      });
    });
  });
});
