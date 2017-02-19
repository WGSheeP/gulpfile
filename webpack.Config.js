module.exports = {
    entry: {
        index: './src/js/index.js '
        //入口文件只能一个页面只有一个入口文件，同时入口文件之间，同级不可相互载入
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,//通过正则获取所有以.js结尾的文件
                exclude: /(node_modules|bower_components)/,//排除这个npm文件中的js文件
                loader: "babel",//加载的是babel这个文件去执行这个任务的
                query: {
                    presets: ['es2015']//babel的版本是编译成es2015的语法
                }
            }
        ]
    }
};