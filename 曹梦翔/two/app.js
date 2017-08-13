/**
 * Created by Administrator on 2017/8/11.
 */
// console.log(process.argv);
var result = 0;
process.argv.forEach(function(el,index){
    index > 1 ? result += +el : null;
});
console.log(result);
