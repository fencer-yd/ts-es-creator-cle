# es 向 ts 渐进工具

类型：`ts渐进工具`

## 安装

npm:

```shell
$ npm install -g @fencer-yd/ts-es-creator-cli
```

## 使用

```shell
$ tec ## 部分需要sudo
$ 😍✨ 文件夹lints已创建完毕 ## 创建lints文件夹
$ 😍✨ prettier迁移成功 ## 创建.prettier.js文件
$ 😍✨ tslint文件迁移成功 ## 在lints文件夹内创建tslint.js
$ 😍✨ eslint文件迁移成功 ## 在lints文件夹内创建eslint.js
$ 😍✨ eslint迁移成功 ## 在根目录创建.eslintrc.js文件
$ 😍✨ editorconfig创建成功 ## 创建.editorconfig文件
$ 😍✨ vscode配置已创建 ## 创建本地vscode配置
$ 😍✨ package.json文件写入成功 ## 修改package.json配置
$ 😍package缓存文件删除成功 ## 删除package.json-lock文件
$ 😍node_modules删除成功 ## 删除node_modules文件
执行 npm i
$ 依赖重新加载中。。。 ## 执行 npm i
$ 你没有权限执行npm i ## 如果出错可能是需要sudo
>是否自动执行 sudo npm i ## 是/否
## 如果否则需要自己执行 npm i
回车
```

## 依赖

> 杨灯，2020.05.12
