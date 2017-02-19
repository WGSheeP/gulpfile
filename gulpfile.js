'use strict';

//noinspection JSUnresolvedFunction
let gulp = require('gulp');
let connect = require('gulp-connect');//gulp 下面有一个热启动插件- gulp-connect，载入热启动模块
let watch=require('gulp-watch');


// gulp.task('default',function () {
//     console.log('开始开启')
// })
gulp.task('server',function () {//执行热启动任务，开启服务器
   //noinspection SpellCheckingInspection
    connect.server({//在函数中调用connect.server这个方法，传入参数
       root:'./www',//第一个参数是指定根目录文件路径，   服务器要执行的目录；
       fallback:'./www/*.html',//第二个参数是根目录文件下的测试页面文件路径，    要执行的文件
       port:'8001',//第三个参数是热启动的服务器地址；
       livereload: true//重新加载    自动刷新插件，为true表示执行自动刷新
   })
});
gulp.task('refresh',function () {

    gulp.src('./www/**/*.*')
    .pipe(connect.reload())//服务器开启期间，调用服务器重载，实时刷新
});
gulp.task('default',['server'],function () {
console.log('开启成功')
});
gulp.watch('./www/index.html',['refresh']);

gulp.watch('./www/**/*.*',['refresh']);