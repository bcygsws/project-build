// console.log('ok');//测试代码
//但是浏览器不识别这种ES6语法
import $ from 'jquery';
//1.导入的是css文件
// import './css/base.css';
// 2.导入的是less文件
import './css/base.less';
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
//--------------------------------------------------------
// webpack打包.vue文件，配置步骤： webpack默认只打包js文件，打包.vue后缀的文件自然也需要加载器辅助
//1.装包 vue-loader  vue-template-compiler(这是vue-loader的内部依赖包，所以也必须安装)
//2.在webpack中引入加载器vue-loader需要的插件    const vueLoaderPlugin=require('vue-loader/lib/plugin');同样地，是插件
// 需要在webpack.config.js中 plugins节点中引入 new vueLoaderPlugin()
//3.继续配置 rules节点，添加vue-loader加载器
//4.有时候报一个警告：[Vue warn]: You are using the runtime-only build of Vue where the ……，还需在webpack.config.js中
// 增加一个resolve节点，添加以下配置：
//其作用是让vue只命中以vue结尾的语句，我们导入 import Vue  from 'vue';就会把vue替换成别名中的路径。react中也这么使用
/**
 *   resolve:{
 *       alias:{
 *           vue$:"vue/dist/vue.js"
 *       }
 *   }
 *
 *
 * */
import Vue from 'vue';
import app from './App.vue';

var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: h => h(app)
});