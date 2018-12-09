var date = new Date();
var year = date.getFullYear(); //获取年
var month = date.getMonth()+1;//获取月
var day = date.getDate(); //获取当日
var time = year+"-"+month;
console.log(time);


var b = '2018-12-6';
var c = b.split("-")[0] + '-' + b.split("-")[1]
console.log(c)