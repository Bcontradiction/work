/**
 * Created by Administrator on 2017/8/12.
 */
// var path = require('path');
var module = require('./test5');
var test = process.argv[2];
var txt = process.argv[3];
module(test,txt,function(err,files){
    if(err){
        return console.log(err);
    }
    files.forEach(function(file){
        console.log(file);
    })
})