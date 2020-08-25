<template>
<div class="app_container">
    <h2>这是app组件</h2>
    <!--onchange事件对浏览器的支持较好，但是有一个缺陷，只有元素失去焦点时才会触发这种改变
    oninput会在value属性值发生改变时触发，但是通过js代码来改变的value值，则该事件不会触发。但是只有在IE8+、谷歌、火狐等浏览器才支持，有兼容性问题
    onpropertychange事件是在元素内容发生改变时，立即触发。不仅是value值，甚至其他元素内容发生改变以及是通过js改变的value值，这个
    事件都将触发。但是，它同样有兼容性问题，只有在IE 11一下的浏览器支持
    综上，在js中通常写兼容代码来把oninput和onpropertychange属性联合使用-->
    <!--<input type="text" value="" @change="inputVal" ref="va">-->
    <!--<input type="text" value="" @input="inputVal" ref="va" />-->
    <input type="text" value="" @input="inputVal" ref="va" />
    <!--方式1-->
    <!--<h3>{{ managedMsg }}</h3>-->
    <!--方式2-->
    <h3>{{ managedMsg() }}</h3>
</div>
</template>

<script>
// 测试计算和侦听属性computed
/**
 * 1.我们不推荐在vue模块中{{}}书写过于复杂的表达式，这样牵涉太多逻辑的东西，会让模板变量难以维护
 * 2.这样就诞生了computed属性，当computed监听的属性值依赖的属性值发生变化时，监听属性值也随着变化，并将这种变化渲染到模板上；
 * 如果它依赖的属性值没有发生变化，则使用缓存值
 *
 */
// 方法1： 使用计算属性和{{计算属性名}}来监听属性值managedMsg
// export default {
//     data() {
//         return {
//             msg: '这是一个好人',
//         };
//     },
//     methods: {
//         inputVal() {
//             this.msg = this.$refs.va.value;
//         },
//     },
//     computed: {
//         // 计算属性的getter方法
//         managedMsg: function () {
//             return this.msg + '值得托付';
//         },
//     },
// };
//方法二：在{{managedMsg()}},同时把manageMsg方法声明在methods属性中，也能实现同样的功能
export default {
    data() {
        return {
            msg: '这是一个好人',
        };
    },
    methods: {
        inputVal() {
            this.msg = this.$refs.va.value;
        },
        managedMsg: function () {
            return this.msg;
        }
    },
};
</script>

<style lang="scss" scoped>
.app_container {
    h2{
        color: pink;
    }
}
</style>
