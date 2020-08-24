//引入path模块
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new htmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    //设置生成的预览页面名称
    filename: 'index.html'
});
module.exports = {
    //development表示代码不会进行压缩和混淆，这样转换速度快一些
    //production表示处于产品发布模式，需要对代码进行压缩和混淆，转换时间要更长
    mode: 'development',//mode用来指定构建模式
//添加打包文件的入口和出口
    entry: path.join(__dirname, './src/index.js'),
    output: {
// 设置打包路径和输出文件名
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            /*写在前面：对于有些伪元素比如::placeholder等，需要手动加前缀，比如：-webkit -ms -moz -o样式才能生效。但是，
            逐一位样式添加前缀非常麻烦，采用添加 postcss-loader加载器的方式主动为需要写明前缀才能生效的样式自动添加前缀,
             为了通用性，每一个样式处理文件类型后，都加上 postcss-loader

            */

            //处理.css样式文件
            {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
            //处理.less样式文件 安装包less less-loader
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']},
            //处理scss|sass文件 安装包 node-sass sass-loader
            {test: /\.scss|sass$/, use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']},

            /*注意；如果图片大小>=limit设定值则显示默认路径，图片大小<limit设定值才会转换成base64文件格式，base64这种
            * 图片格式加载更快一些
            * */
            //处理css与路径有关的文件---处理图片等文件还依赖file-loader,需要安装该包，不必在里面配置
            // {test: /\.bmp|png|jpg|gif|jpeg$/, use: 'url-loader'},
            //转化为base64文件 图片真实大小：471735 < limit值479735，才转化为base64文件
            // {test: /\.bmp|png|jpg|gif|jpeg$/, use: 'url-loader?limit=479735&name=[hash:8]-[name].[ext]'},
            //安装包 file-loader url-loader
            {
                test: /\.bmp|png|jpg|gif|jpeg|ttf|eot|svg|woff|woff2$/,
                use: 'url-loader?limit=300000&name=[hash:8]-[name].[ext]'
            },
            //高级语法转化为低级语法
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
        ]
    }

};