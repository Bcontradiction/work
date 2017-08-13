/**
 * Created by Administrator on 2017/8/11.
 */
//用于过滤后缀名并输出.
//引入fs模块
var fs = require('fs');
module.exports = function(path,extname,callback){
    fs.readdir(path,function(err,list){
        if(err){
            return callback(err,null);
        }else {
            list = list.filter(function(file){
                return file.split('.')[1] === extname;
            });
        }
        callback(null,list);
    })
}