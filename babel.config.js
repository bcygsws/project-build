/*const presets = [
    ["@babel/env", {
        targets: {
            edge: '17',
            firefox: '60',
            chrome: '67',
            safari: '11.1'
        }
    }]
];
module.exports = {presets};*/

//1.配置的都是插件包 包名中有preset或者plugin的
//2.要了解babel的工作原理 https://www.jianshu.com/p/e9b94b2d52e2
/*
* babel核心包 babel-core 转译器本身 babylon js词法解析器  babel-traverse 对AST抽象语法树进行遍历   babel-generator 根据AST生成代码
* ES6代码解析-转译-生成ES5低级语法的步骤:
**a.babylon            输入的ES6代码---babylon（js词法解析器）---AST(抽象语法数 abstract syntax tree的简写)
*b.babel-traverse ,[trəˈvɜːs]横过、横越的意思    包babel-traverse 对AST进行转译、遍历---得到新的AST
*c.babel-generator     根据AST生成ES5代码
*
* */
module.exports = {
    presets: [
        "@babel/env"
    ],
    plugins: [
        "@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties"
    ]
};