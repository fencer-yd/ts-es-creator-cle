const fs = require("fs-extra");
const { exec } = require("child_process");
const log = require("../log");
const inquirer = require("inquirer");

let questions = [
  {
    type: "list",
    name: "sudo",
    message: "是否自动执行 sudo npm i",
    choices: ["yes", "no"],
  },
];

module.exports = {
  packageHandle: (targetPath, callback) => {
    fs.readJSON(`${targetPath}/package.json`, (err, packageObj) => {
      if (err) log(err, "err");
      const package = {
        ...packageObj,
      };

      if (!package["husky"]) package["husky"] = {};
      if (!package["husky"]["hooks"]) package["husky"]["hooks"] = {};
      package["husky"]["hooks"]["pre-commit"] = "npm run lint";

      package["scripts"]["lint"] =
        "eslint src --ext .jsx,.js,.ts,.tsx --config .eslintrc.js";
      package["scripts"]["fix"] =
        "eslint src --fix --ext .jsx,.js,.ts,.tsx --config .eslintrc.js";
      package["scripts"]["precommit"] = "npm run lint";

      if (!package["devDependencies"]) package["devDependencies"] = {};
      package["devDependencies"]["typescript"] = "~3.9";
      package["devDependencies"]["husky"] = "~4.2";
      package["devDependencies"]["eslint"] = "~7.0";
      package["devDependencies"]["prettier"] = "~2.0";
      package["devDependencies"]["eslint-config-prettier"] = "~6.11";
      package["devDependencies"]["@typescript-eslint/eslint-plugin"] = "~2.34";
      package["devDependencies"]["@typescript-eslint/parser"] = "~2.34";
      package["devDependencies"]["babel-eslint"] = "~10.1";
      package["devDependencies"]["eslint-plugin-react-hooks"] = "~4.0";

      if (!package["dependencies"]) package["dependencies"] = {};
      package["dependencies"]["@types/lodash"] = "~4.14";
      package["dependencies"]["@types/react"] = "~16.9";
      package["dependencies"]["@types/react-dom"] = "~16.9";

      fs.writeJson(`${targetPath}/package.json`, package, (err) => {
        if (err) log("package.json 文件写入失败", "error");
        else {
          log("✨ package.json文件写入成功", "ok");
          callback && callback();
        }
      });
    });
  },
  eslintPackageInstall: () => {
    exec("rm -rf package-lock.json", (err) => {
      if (err) {
        log(err, "err");
        return;
      }
      log("package缓存文件删除成功", "ok");
      exec("rm -rf node_modules", (err) => {
        if (err) {
          log(err, "err");
          return;
        }
        log("node_modules删除成功", "ok");
        log("依赖重新加载中。。。", "info");
        exec("npm i", (err, info, warn) => {
          if (err) {
            log("你没有权限执行npm i", "err");
            inquirer.prompt(questions).then((ans) => {
              const { sudo } = ans;
              if (sudo === "yes") {
                log("依赖重新加载中。。。", "info");
                exec("sudo npm i", (error, inf, warning) => {
                  if (error) log("请手动执行 npm i", "ok");
                  else {
                    log(warning, "warn");
                    log(inf, "ok");
                  }
                });
              } else {
                log("请手动执行 npm i", "ok");
              }
            });
          } else {
            log(warn, "warn");
            log(info, "ok");
          }
        });
      });
    });
  },
};
