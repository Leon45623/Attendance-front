var setStyle=function(){

 var test=$("#btn1").offset().left;
$("#span2").css("margin-left",test);
 var height=$("#td1").width();
 $("#td1").css("height",height);
  $("#td2").css("height",height);
}
var selectDay=function(){
 var eachwidth=$(".sc-item").width(); 
$(".sc-item").css("height",eachwidth+10+"px");
}
function getLength(json){
var jsonLength=0;
for(var i in json){
jsonLength++;
}
return jsonLength;

}

/*
var setuploadStyle=function(){

var top=$("#asfcqe").offset().top;
var left=$("#asfcqe").offset().left;
console.log(top);
console.log(left);
$("#test1").css({position:"absolute",'top':0+"px",'left':left,'z-index':9});

var height=$(window).height();
$("#asdeh").css("height",height*3/5);
$("#test3").css("margin-left",(left+25)+"px");

}
*/
var setBatchStyle=function(){

var test=$(window).width();
 var width=$("#iod").width();
 $("#adf").css("width",test-width-20);
 var height=$(window).height();
  $("#tehe").css("height",height/13+"px");
    $("#tehe").css("line-height",height/13+"px");
	 $("#wger").css("height",height/5.5+"px");
	$("#adf").css("height",height/5.5+"px");
 
}

var setchartsstyle=function(){

var width=$(window).width();
$("#main").css("width",width*0.9);
$("#main").css("height",width*0.9);
console.log("this is setchartstyle");

}

var setaddemployeestyle=function(){



 var height=$(window).height();
  $(".adfasd").css("height",height/11.5+"px");
  
 
}

var setBatchdetailStyle=function(){
var height=$(window).height();
console.log(height);
$(".srt").css("height",height/14+"px");
$(".sdfa").css("line-height",height/14+"px");


}


var addmonth=function(year,month){

if(month>11){

year=year+1;
month=1;
}else{
month=month+1;
}
return year+"-"+month;

}

var reducemonth=function(year,month){
if(month<2){

year=year-1;
month=12;
}else{
month=month-1;
}
return year+"-"+month;



}



//格式化日期
Date.prototype.Format=function(fmt){

var o={
"M+":this.getMonth()+1,
"d+":this.getDate(),
"h+":this.getHours(),
"m+":this.getMinutes(),
"s+":this.getSeconds(),
"q+":Math.floor((this.getMonth()+3)/3),
"S":this.getMilliseconds()


};
if(/(y+)/.test(fmt))fmt=fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length));
for(var k in o)
if(new RegExp("("+k+")").test(fmt))fmt=fmt.replace(RegExp.$1,(RegExp.$1.length==1)?(o[k]):(("00"+o[k]).substr((""+o[k]).length)));
return fmt;



}







