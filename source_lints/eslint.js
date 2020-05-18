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
    "accessor-pairs": "error", // 在对象和类中强制执行getter / setter对
    "array-bracket-newline": ["error", "consistent"], // 数组超中的元素换行符要求保持一致，如果该对中的一个方括号内有换行符，而另一个方括号内没有换行符，则会报告错误。
    "array-bracket-spacing": [
      // 方括号内加空格
      "error",
      "always", // 允许方括号内加空格或者换行
      {
        objectsInArrays: true, // 如果是对象则可以加空格
        singleValue: false, // 如果是简单元素则不允许加空格
        arraysInArrays: false, // 如果是数组元素则不允许加空格
      },
    ],
    "array-callback-return": [
      "error",
      {
        allowImplicit: true, // 允许需要返回值的方法的回调隐式返回不包含表达式undefined的return语句。
        checkForEach: false, // forEach不参与
      },
    ], // 数组回调中强制执行return， 否则报错
    "array-element-newline": ["error", "consistent"], // 数组内换行符要保持一致
    "arrow-body-style": ["error", "as-needed"], // 在箭头功能主体中需要括号，如果不需要可以将其省略
    "arrow-parens": ["error", "as-needed"], // 箭头函数参数需要加括号，如果不需要可以省略
    "arrow-spacing": [
      // 箭头函数两边是否加空格
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "block-scoped-var": "error", // 不允许在代码模块内部定义代码块外需要使用的变量
    "block-spacing": ["error", "always"], // 代码模块的括号内部需要加空格或者换行
    "brace-style": [
      // 代码块的括号是否需要换行
      "error",
      "1tbs", // 需要保持一致
      {
        allowSingleLine: true, // 简单表达式不需要换行
      },
    ],
    camelcase: ["error", { properties: "always" }], // 驼峰命名，允许初次变量不是驼峰需要强制转换为驼峰
    "capitalized-comments": ["error"], // 注释不允许以小写字母开头
    "class-methods-use-this": ["warn", { exceptMethods: ["construct"] }], // 不允许使用this在方法内部
    "comma-dangle": ["error", "always"], // 强制逗号尾随
    "comma-spacing": [
      // 逗号之间加空格
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "comma-style": ["error", "last"], // 逗号可以出现在最后
    complexity: ["error", 3], // 条件判断不能超过3个
    "computed-property-spacing": ["error", "never"], // 计算属性字段之间不允许有空格
    "consistent-return": [
      "error",
      {
        treatUndefinedAsUnspecified: false, // 始终指定值或undefined仅隐式返回
      },
    ],
    "consistent-this": ["error", "self"], // 允许将this赋值给self
    "constructor-super": "error", // class extend construct 需要些  super
    curly: ["error", "multi-or-nest", "consistent"], // 多行表达式构成的代码块，需要 用大括号
    "default-case-last": "error", // 将default case 放在最后一行
    "default-case": "error", // 需要default case
    "default-param-last": "error", // 带默认数据的传参需要放到最后一个
    "dot-location": ["error", "object"], // 点操作需要放在最后一行
    "dot-notation": ["error", { allowPattern: "^[a-z]+(_[a-z]+)+$" }], // 允许下划线命名作为字符串来取数据
    "eol-last": ["error", "always"], // 代码块结束需要添加一列空行
    eqeqeq: "error", // 必须使用 ===
    "for-direction": "error", // 必须以正确的方向使用for循环
    "func-call-spacing": ["error", "never"], // 方法调用之间不需要空格
    "func-name-matching": ["error", "never"], // 要求函数名称不需要与为其分配的变量或属性的名称匹配
    "func-names": ["error", "never"], //允许命名function表达式
    "func-style": ["error", "declaration"], // 允许箭头函数作为表达式赋值
    "function-call-argument-newline": ["error", "consistent"], // 保持传参格式一致，换行或者不换行
    "function-paren-newline": ["error", { minItems: 3 }], // 超过三个参数，参数另起一行
    "generator-star-spacing": ["error", { before: true, after: false }], // function *generator() {}
    "generator-star": ["error", "end"], // function *generator() {}
    "getter-return": "error", // get方法必须返回
    "guard-for-in": "error", // for in 需要校验hasOwnProperty
    "id-blacklist": ["error", "callback"], // 命名黑名单
    "implicit-arrow-linebreak": ["error", "beside"], // 使用隐式返回值箭头函数体的位置
    "init-declarations": ["error", "never"], // 允许初始化变量
    "jsx-quotes": ["error", "prefer-double"], // 元素属性使用"
    "key-spacing": [
      "error",
      {
        beforeColon: false, // 在对象文字中不允许key和冒号之间存在空格
        afterColon: true, // 在冒号和对象常量中的值之间至少需要一个空格
      },
    ],
    "keyword-spacing": [
      "error",
      {
        before: true, // 在关键字前后强制保持一致的间距
        after: true,
      },
    ],
    "line-comment-position": [
      "error",
      { ignorePattern: "pragma", applyDefaultIgnorePatterns: false }, // 注释位置
    ],
    "lines-around-comment": [
      "error",
      { beforeLineComment: true, allowClassStart: false }, // 注释上下间隔
    ],
    "lines-between-class-members": ["error", "always"], // class属性上下间隔
    "max-classes-per-file": "error", // 一个文件最多只能定义一个class
    "max-depth": ["error", 4], // 代码块嵌套最多4层
    "max-len": ["error", { code: 80 }], // 单行最多80字符
    "max-lines-per-function": ["error", { max: 50, skipComments: true }], // 限制function内行数
    "max-lines": [
      // 文件限制300行
      "error",
      {
        max: 300,
        skipComments: true,
      },
    ],
    "max-nested-callbacks": ["error", 3], // 代码块嵌套层数
    "max-params": ["error", 3], // function传参数量
    "new-cap": ["error", { newIsCap: true }], // new实例化类首字母大写
    "newline-before-return": "error", // return上面留一行空行
    "no-alert": "error", // 不支持alert
    "no-console": "error",
    "no-debugger": "error",
    "no-const-assign": "error", // const 数据不能再次赋值
    "no-control-regex": "error", // 禁止在正则表达式中使用控制字符
    "no-dupe-args": "error", // 禁止在function定义中使用重复的参数
    "no-dupe-class-members": "error", // 禁止在class中出现相同属性
    "no-dupe-else-if": "error", // 禁止在else if出现相同的判断条件
    "no-dupe-keys": "error", // Object不能出现相同的key定义
    "no-duplicate-case": "error", // switch语句中不能出现相同的case
    "no-duplicate-imports": "error", // 不能出现相同的import
    "no-else-return": "error", // 不能出现方法部分返回
    "no-empty-character-class": "error", // 禁止在正则表达式中使用空字符类
    "no-empty-function": "error", // 禁止空方法
    "no-empty-pattern": "error", // 禁止使用空patterns
    "no-empty": "error", // 禁止使用空的代码块
    "no-eq-null": "error", // 禁止空值比较
    "no-eval": "error", // 禁止使用eval
    "no-ex-assign": "error", // 禁止在catch 中重新赋值error
    "no-extend-native": "error", // 禁止扩展本地对象
    "no-extra-bind": "error", // 禁止无必要的绑定
    "no-extra-boolean-cast": "error", // 禁止使用不必要的布尔类型转换
    "no-extra-parens": "error", // 禁止不必要的括号
    "no-extra-semi": "error", // 禁止不必要的分号
    "no-fallthrough": "error", // 禁止Case Statement 失败
    "no-floating-decimal": "error", // 禁止使用简写的浮点类型数据
    "no-func-assign": "error", // 禁止重载function
    "no-global-assign": "error", // 禁止给global对象赋值
    "no-implicit-globals": "error", //禁止声明全局变量
    "no-implied-eval": "error", // 禁止使用隐式eval
    "no-import-assign": "error", // 禁止重载导入变量
    "no-inline-comments": "error", // 在代码后插入内嵌注释
    "no-inner-declarations": "error", // 无内部声明
    "no-invalid-regexp": "error", // 禁止在正则构造函数内使用无字符串
    "no-invalid-this": "error", //禁止在对象或类之外使用this
    "no-label-var": "error", //禁止使用标签作为变量名
    "no-lone-blocks": "error", // 禁止不必要的代码块
    "no-mixed-spaces-and-tabs": "error", //  禁止tag和空格混合使用
    "no-multi-assign": "error", // 禁止使用链接的赋值表达式
    "no-multi-spaces": "error", // 禁止使用多余的空格
    "no-multi-str": "error", // 禁止使用多行字符串
    "no-multiple-empty-lines": "error", // 禁止多次换行
    "no-nested-ternary": "error", // 禁止使用嵌套三元表达式
    "no-new-func": "error", // 禁止函数构造函数
    "no-new-object": "error", // 禁止Object 构造函数
    "no-new-wrappers": "error", // 禁止原始类的实例
    "no-obj-calls": "error", // 禁止将global对象赋值
    "no-param-reassign": "error", // 禁止重新定义函数传参
    "no-proto": "error", // 禁止使用__proto__
    "no-redeclare": "error", // 禁止重复声明变量
    "no-regex-spaces": "error", // 禁止在正则表达式文字中使用多个空格
    "no-restricted-exports": ["error", { restrictedNamedExports: ["default"] }], // 禁止将default作为变量导出
    "no-return-assign": "error", // 禁止在return语句中赋值
    "no-return-await": "error", // 禁止return await
    "no-script-url": "error", // 禁止javascript:void(0)
    "no-self-assign": "error", // 禁止自我分配
    "no-self-compare": "error", // 禁止自我比较
    "no-sequences": "error", // 禁止单独使用逗号运算符
    "no-shadow-restricted-names": "error", // 禁止隐藏限制名称
    "no-shadow": "error", // 禁止在代码块中声明外部已有变量
    "no-spaced-func": "error", // 禁止在方法名和括号之间加空格
    "no-tabs": "error", // 禁止使用\t
    "no-this-before-super": "error", // 禁止this在super之前使用
    "no-throw-literal": "error", // 不允许使用throw
    "eslint no-trailing-spaces": "error", //行尾禁止尾随空格
    "no-undef-init": "error", //禁止将undefined作为初始值赋值
    "no-unexpected-multiline": "error", //禁止混淆多行表达式
    "no-unmodified-loop-condition": "error", //禁止使用未经修改的循环条件
    "no-unneeded-ternary": "error", // 存在更简单的选择时禁止三元运算符
    "no-unreachable": "error", // 禁止不可达代码，例如return 之后的
    "no-unsafe-negation": "error", // 禁止否定关系运算符的左操作数
    "no-unused-expressions": "error", // 禁止使用未使用的表达式
    "no-unused-vars": "error", //禁止未被使用的变量
    "no-use-before-define": "error", // 禁止变量提前使用
    "no-useless-backreference": "error", //在正则表达式中禁止无用的反向引用
    "no-useless-call": "error", // 禁止不必要的.call()和.apply()
    "no-useless-catch": "error", //禁止不必要的catch
    "no-useless-computed-key": "error", // 禁止在类和对象中使用不必要的计算Key
    "no-useless-concat": "error", // 禁止不必要的字符串连接
    "no-useless-constructor": "error", //禁止不必要的构造函数
    "no-useless-escape": "error", // 禁止不必要的转义
    "no-useless-rename": "error", // 禁止不必要的导入重命名
    "no-useless-return": "error", //禁止不必要的return
    "no-var": "error", // 禁止var使用
    "no-void": "error", // 禁止void表达式
    "no-warning-comments": "error", // 禁止警告注释
    "no-whitespace-before-property": "error", // 禁止在属性前面使用空格
    "no-with": "error", // 不是用with
    "no-wrap-func": "error", // 禁止在函数周围添加不必要的括号
    "nonblock-statement-body-position": "error", // 强制执行单行语句的位置
    "object-curly-newline": ["error", { consistent: true }], // 在对象内的换行保持一致
    "object-curly-spacing": [
      "error",
      "never",
      { objectsInObjects: true, arraysInObjects: false },
    ], // 对象内的空格控制
    "object-property-newline": ["error", "nerver"], // 强制将对象属性放在单独的行上
    "one-var-declaration-per-line": "error", // 每一行声明一个变量
    "operator-assignment": "error", // 尽量简写操作
    "operator-linebreak": ["error", "before"], // 行数过长，操作符放在行首
    "padding-line-between-statements": [
      // 填充
      "error",
      { blankLine: "always", next: "return" },
    ],
    "prefer-arrow-callback": "error", // 使用箭头函数回调
    "prefer-const": "error", //如果不重新分配建议使用const
    "prefer-destructuring": "error", // 首选从对象和数组中进行解构
    "prefer-exponentiation-operator": "error", //禁止Math.pow 使用**
    "prefer-named-capture-group": "error", // 禁止在正则中使用命名捕获组
    "prefer-numeric-literals": "error", // 禁止使用parseint和number.parseint去处理非10进制
    "prefer-promise-reject-errors": "error", // reject中返回Error
    "prefer-regex-literals": "error", // 禁止使用正则表达式的构造函数来实例化已有的正则
    "prefer-rest-params": "error", // 使用rest代替arguments
    "prefer-template": "error", // 建议使用模板字符串
    "quote-props": ["error", "as-needed"], //按需给key加引号
    quotes: ["error", "single"], // 使用单引号
    radix: ["error", "as-needed"], // 需要基数的参数可以省略
    "require-atomic-updates": "error", // 禁止await或者yield直接参与计算
    "require-await": "error", // async中必须加await
    "require-jsdoc": [
      // 需要jsdoc
      "error",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    "require-yield": "error", // generator functions中必须有yield
    "rest-spread-spacing": ["error", "never"], // 结构不需要空格
    "semi-spacing": ["error", { before: false, after: true }], // 在分号后加空格
    "semi-style": ["error", "last"], // 分号只能出现在行尾
    semi: ["error", "always"], // 强制加分号
    "sort-imports": [
      // import 排序
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "space-after-function-name": ["error", "never"], // function name后不需要空格
    "space-after-keywords": ["error", "always"], // 关键词后加空格
    "space-before-blocks": ["error", "always"], // 代码块前括号前面需要加空格
    "space-before-function-paren": [
      // 函数括号前的空格
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-before-function-parentheses": [
      "error",
      {
        anonymous: "always",
        named: "never",
      },
    ],
    "space-before-keywords": ["error", "always"], // 关键字前面需要加空格
    "space-in-brackets": ["error", "never"], // 在[] {}使用一致的间距
    "space-in-parens": ["error", "never"], // 在函数参数调用中使用一致的间距
    "space-infix-ops": "error", // 要求在中缀运算符之间加空格
    "space-return-throw-case": "error", // 需要在return，throw和case关键字后加空格
    "space-unary-ops": "error", // 一元操作符之间不需要空格
    "space-unary-word-ops": "error", // 一元操作符后需要加空格
    "spaced-comment": ["error", "always"], // 注释后面需要加空格
    "spaced-line-comment": ["error", "always"], // 在行注释后强制保持一致的间距
    "switch-colon-spacing": ["error", { after: true, before: false }], // switch case 空格处理
    "symbol-description": "error", // 不能实例化空
    "use-isnan": "error", // 用isNaN 来判断NaN
    "valid-jsdoc": [
      // doc校验
      "error",
      {
        prefer: {
          arg: "param",
          argument: "param",
          class: "constructor",
          return: "returns",
          virtual: "abstract",
        },
      },
    ],
    "valid-typeof": "error", // 强制校验有效字符串
    "vars-on-top": "error", // 要求变量声明位于顶部
    "wrap-iife": "error", // 函数表达式立即调用需要用括号包裹
    "wrap-regex": "error", // 正则表达式立即调用需要用括号包裹
    "yield-star-spacing": ["error", { before: true, after: false }], // *函数的符号靠近name
    yoda: ["error", "always"], // 写判断语句时需要将已知值放在前面
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-find-dom-node": "off",
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
  },
};
