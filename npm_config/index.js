module.exports = {
  packageHandle: () => {
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

      fs.writeJson(`${targetPath}/package.json`, package);
    });
  },
  eslintPackageInstall: () => {
    exec("rm -rf package-lock.json", (err) => {
      if (err) log(err, "err");
      else log("package缓存文件删除成功", "ok");
    });
    exec("rm -rf node_modules", (err) => {
      if (err) log(err, "err");
      else log("node_modules删除成功", "ok");
    });
    exec("npm i husky@latest --save-dev", (err, info, warn) => {
      if (err) log(err, "err");
      else {
        log(warn, "warn");
        log(info, "ok");
      }
    });
    exec("npm i typescript@latest --save-dev", (err, info, warn) => {
      if (err) log(err, "err");
      else {
        log(warn, "warn");
        log(info, "ok");
      }
    });
    exec("npm i eslint@latest --save-dev", (err, info, warn) => {
      if (err) log(err, "err");
      else {
        log(warn, "warn");
        log(info, "ok");
      }
    });
    exec("npm i prettier@latest --save-dev", (err, info, warn) => {
      if (err) log(err, "err");
      else {
        log(warn, "warn");
        log(info, "ok");
      }
    });
    exec(
      "npm i eslint-config-prettier@latest --save-dev",
      (err, info, warn) => {
        if (err) log(err, "err");
        else {
          log(warn, "warn");
          log(info, "ok");
        }
      }
    );
    exec(
      "npm i @typescript-eslint/eslint-plugin@latest --save-dev",
      (err, info, warn) => {
        if (err) log(err, "err");
        else {
          log(warn, "warn");
          log(info, "ok");
        }
      }
    );
    exec(
      "npm i @typescript-eslint/parser@latest --save-dev",
      (err, info, warn) => {
        if (err) log(err, "err");
        else {
          log(warn, "warn");
          log(info, "ok");
        }
      }
    );
    exec("npm i babel-eslint@latest --save-dev", (err, info, warn) => {
      if (err) log(err, "err");
      else {
        log(warn, "warn");
        log(info, "ok");
      }
    });
    exec("npm i @types/lodash@latest", (err, info, warn) => {
      if (err) log(err, "err");
      else {
        log(warn, "warn");
        log(info, "ok");
      }
    });
    exec("npm i @types/react@latest", (err, info, warn) => {
      if (err) log(err, "err");
      else {
        log(warn, "warn");
        log(info, "ok");
      }
    });
    exec("npm i @types/react-dom@latest", (err, info, warn) => {
      if (err) log(err, "err");
      else {
        log(warn, "warn");
        log(info, "ok");
      }
    });
    exec("npm i", (err, info, warn) => {
      if (err) log(err, "err");
      else {
        log(warn, "warn");
        log(info, "ok");
      }
    });
  },
};
