/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
var filename = process.argv[2];
//fs.readFile 以异步的方式读取文件内容
fs.readFile(filename,function(err,data){
    if(err){
        throw err;
    }
    var lines = data.toString().split('\n').length-1;
    console.log(lines)
});