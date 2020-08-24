// console.log('ok');//测试代码
//但是浏览器不识别这种ES6语法
import $ from 'jquery';
//1.导入的是css文件
// import './css/base.css';
// 2.导入的是less文件
// import './css/base.less';
// 3.导入.scss文件
import './css/base.scss';

$(function () {
    $('#list li:even').css({backgroundColor: "#e92312"});
    $('#list li:odd').css({backgroundColor: 'blue'});
});

//写一次高级语法，来测试babel-loader属性

/*
为此，我们需要安装babel系列包
a.babel转化器     @babel/core @babel/runtime  @babel-loader
b.babel语法插件包  @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties
c.在项目根目录中配置
     module.exports = {
        presets:["@babel/preset-env"],
        plugins:[ "@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties" ]
    }
d.在webpack.config.js中配置 babel-loader
*/
class Person {
    static info = 'aa';

    play() {

    }

}

console.log(Person.info);