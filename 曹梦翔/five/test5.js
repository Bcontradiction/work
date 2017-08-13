/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
//引用node自带的模块path.
//path模块用于node的整理、转换、合并路径，解决路径问题.但它仅仅是处理路径字符串，
// 而不会去坚持或处理文件。
//在任何模块文件内部，都可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径
var path = require('path');
//获取路径
var test = process.argv[2];
//获取文件后缀名
var txt = process.argv[3];
//fs.readdir 以异步的方式读取文件目录
fs.readdir(test,function(err,list) {
    if(err){
        throw err;
    }
    for(var i=0;i<list.length;i++){
        var index = list[i];
        if(path.extname(index)==='.' + txt){// == 是比较值，=== 是比较类型和值
            console.log(index);
        }
    }
})
