/**
 * Created by Administrator on 2017/8/12.
 */
var http = require('http');
var url = process.argv[2];
http.get(url,function(response){
    var list = [];
    response.on('data',function(data){
        list.push(data.toString());
    });
    response.on('error',function(err){
        throw  err;
    });
    response.on('end',function(){
        var str = '';
        list.forEach(function(s){
            str += s;
        });
        console.log(str.length);
        console.log(str);
    })
})