angular.module('starter.controllers',['ionic', 'ngCordova'])


 .controller('UploadCtrl', function($scope,$stateParams,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {

$scope.doRefresh=function(){

var msg={

"pwId":$rootScope.user.pwId

}

newService.findUser(msg,function(data){
$rootScope.user.headportrait=data.headportrait;
$scope.$broadcast('scroll.refreshComplete');
});
}

$scope.upload=function(){
var form = new FormData(document.getElementById("uploadForm"));
newService.upload(form,function(data){
var alertPopup = $ionicPopup.alert({
       title: '上传成功'
     });
$rootScope.user.headportrait=data.headportrait;
});


}




$scope.gotouser=function(){

$state.go('tab.user');
}


 })



 .controller('EmployeeInfoCtrl', function($scope,$stateParams,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {

var pwId=$stateParams.pwId;
console.log(pwId);
var data={
"pwId":pwId
}
newService.findemployeeById(data,function(data){

console.log(data);
$scope.employee=data;
})

$scope.gotoexception=function(){

$state.go('tab.exception');

}



 })




 .controller('AddemployeeCtrl', function($scope,$stateParams,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {


$scope.gotoemployeelist=function(){
$state.go('tab.employeelist');
}
setaddemployeestyle();
var pwId=$stateParams.pwId;
console.log(pwId);
var data={
"pwId":pwId
}
newService.findemployeeById(data,function(data){

console.log(data);
$scope.employee=data;
})


$scope.addemployee=function(){
var data={
"pwId":pwId,
"superId":$rootScope.user.pwId
}
newService.addemployee(data,function(data){
if(data.msg=="success"){
$state.go('tab.employeelist');
}
})

}

 })





 .controller('BatchCtrl', function($scope,$stateParams,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {
setBatchStyle();
$scope.result={};


$scope.gotobatchdetail=function(){

$state.go('tab.batchdetail');
}

$scope.addRemake=function(){



	
	var data={
	'pwId':$rootScope.employee.pwId,
	"checkInfo":$rootScope.info.checkInfo,
	"remake":$scope.result.remake,
	"date":$rootScope.time
	}
	console.log(data);
	newService.addRemake(data,function(data){
	if(data.msg=="success"){
	$state.go("tab.check");
	}
	})
	
	



}	

$scope.gotocheck=function(){

$state.go('tab.check');
}


 })
 
 
 
 
 .controller('BatchdetailCtrl', function($scope,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {


$scope.init=function(){
   setBatchdetailStyle();

}
    $scope.init();           
            
$scope.gotobatch=function(){
$state.go('tab.batch');

}
$scope.tests=[{"name":"正常"},
{"name":"漏刷卡"},{"name":"迟到"},{"name":"早退"},
{"name":"病假"},{"name":"年假"},{"name":"调休"},
{"name":"产假"},{"name":"婚假"},{"name":"事假"},
{"name":"陪产假"},{"name":"旷工"}];


$rootScope.info={};




$scope.select=function(option){

$rootScope.info.checkInfo=option;


$state.go('tab.batch');

}



 })
 
 
 
 
 .controller('CheckCtrl', function($scope,$ionicPopup,$cordovaDatePicker,$timeout,$state,$rootScope,$location,newService) {

$scope.gotohome=function(){

$state.go('tab.home');
}

$scope.test=function(option){
console.log(option);

if($("#"+option).attr('checked')){
$("#"+option).attr("checked",false);
console.log("flase");

}else{
$("#"+option).attr("checked",true);
console.log("true");
}
}
$rootScope.employee={};

//核对
$scope.check=function(option){
console.log(option);
$rootScope.employee.pwId=option;

	$state.go('tab.batch');



}
//第一次进页面
var data={
//"date":new Date(),
"superId":$rootScope.user.pwId
}

//$rootScope.time=new Date().Format("yyyy-MM-dd");
  newService.findchecknow(data,function(data){
  console.log(data);
          $scope.$apply(function(){
                  $scope.employees=data;
              });
     $("#check1").css("background-color","#cfe2f3");
        $("#check1").css("color","#fff");
    })
//找已核对
$scope.findisChecked=function(){
var data={
//"date":$rootScope.time,
"superId":$rootScope.user.pwId
}

newService.findisChecked(data,function(data){
console.log(data);
   $("#check2").css("background-color","#cfe2f3");
        $("#check2").css("color","#fff");
		$("#check1").css("background-color","#f5f5f5");
        $("#check1").css("color","grey");
  $scope.$apply(function(){
                  $scope.employees=data;
              });
var a= $("#check1").css("color");
 console.log("a:",a);
})

}

//找未核对
$scope.findnoChecked=function(){
var data={
//"date":$rootScope.time,
"superId":$rootScope.user.pwId
}

  newService.findchecknow(data,function(data){
          $scope.$apply(function(){
                  $scope.employees=data;
              });
			  
     $("#check1").css("background-color","#cfe2f3");
        $("#check1").css("color","#fff");
			$("#check2").css("background-color","#f5f5f5");
        $("#check2").css("color","grey");
		 var a= $("#check1").css("color");
 console.log("a:",a);
    })



}
/*

  $scope.datecheck=function(){
 
 
   var options = {
    date: new Date(),
    mode: 'date', // or 'time'
    allowOldDates: false,
    allowFutureDates: false,
    doneButtonLabel: 'DONE',
    doneButtonColor: '#F2F3F4',
    cancelButtonLabel: 'CANCEL',
    cancelButtonColor: '#000000',
	androidTheme:5
  };

 

    $cordovaDatePicker.show(options).then(function(date){
	var data={
	'date':date,
	"superId":$rootScope.user.pwId
	}
	 
   $rootScope.time=date.Format("yyyy-MM-dd");
            if($("#check1").css("color")=="rgb(128, 128, 128)"){
			newService.findisChecked(data,function(data){
console.log(data);
   $("#check2").css("background-color","#cfe2f3");
        $("#check2").css("color","#fff");
		$("#check1").css("background-color","#f5f5f5");
        $("#check1").css("color","grey");
  $scope.$apply(function(){
                  $scope.employees=data;
              });
var a= $("#check1").css("color");
 console.log("a:",a);
})

			}
			
			if($("#check1").css("color")=="rgb(255, 255, 255)"){
			  newService.findchecknow(data,function(data){
          $scope.$apply(function(){
                  $scope.employees=data;
              });
			  
     $("#check1").css("background-color","#cfe2f3");
        $("#check1").css("color","#fff");
			$("#check2").css("background-color","#f5f5f5");
        $("#check2").css("color","grey");
		 var a= $("#check1").css("color");
 console.log("a:",a);
    })
			
			
			}

       
    });

  
 
 }
 */


 })
 
 
 

.controller('EmployeelistCtrl', function($scope,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {

$scope.gotoaddemployee=function(option){
$state.go('tab.addemployee',{pwId:option});

}
var data={

'pwId':$rootScope.user.pwId
}
newService.findEmployee(data,function(data){
console.log(data);
$scope.employees=data;

});
$scope.body={};


$scope.gotohome=function(){

$state.go('tab.home');
}
$scope.findbodyById=function(){

var data={
'msg':$scope.body.msg
}

newService.search(data,function(data){
$scope.$apply(function(){
   $scope.employees=data;
    });

});


}

$scope.$watch('body.msg',function(newValue,oldValue){

if(newValue!=undefined&&newValue!=null){

newService.search(newValue,function(data){
$scope.$apply(function(){
   $scope.employees=data;
    });

});



}
})



})





 
 

.controller('LoginCtrl', function($scope,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {
	$scope.user={};
	if(localStorage.getItem("username")!=null&&localStorage.getItem("password")!=null&&localStorage.getItem("password")!="undefined"){
	var data={
	'pwId':localStorage.getItem("username"),
	'password':localStorage.getItem("password")
}
$rootScope.user={};
newService.login(data,function(data){
	if(data!=null){
	$rootScope.user.pwId=data.pwId;
	$rootScope.user.position=data.position;
	$rootScope.user.name=data.name;
	$rootScope.user.superId=data.superId;
	$rootScope.user.headportrait=data.headportrait;
	}else{		
		mui.toast('用户不存在');
	}	
})
	
	
	
	
	$state.go('tab.home');
	}
$scope.login=function(){
if($scope.user.pwId==undefined||$scope.user.password==undefined){
	
		mui.toast('请输入有效地信息');
}else{


var data={
	'pwId':$scope.user.pwId,
	'password':$scope.user.password	
}
$rootScope.user={};
newService.login(data,function(data){
	if(data!=null){
	console.log(data);
	localStorage.setItem("username",data.pwId);
	localStorage.setItem("password",data.password);
	$rootScope.user.pwId=data.pwId;
	$rootScope.user.position=data.position;
	$rootScope.user.name=data.name;
	$rootScope.user.superId=data.superId;
	$rootScope.user.headportrait=data.headportrait;
	$state.go('tab.home');
	}else{		
		mui.toast('用户不存在');
	}	
})



}
}



})




.controller('MysheetCtrl', function($scope,$ionicPopup,$cordovaDatePicker,$timeout,$state,$rootScope,$location,newService) {
/*
var d=new Date();
var data={

'date':d,
'pwId':$rootScope.user.pwId

}

newService.findmysheet(data,function(data){

console.log(data);
if(data!=null){
$scope.sheet=data;
}
})

*/
$scope.sheet={};
	var options = {
    width: $(window).width()+'px',
    height: ($(window).height())*0.7+'px',
    language: 'CH',//语言      
    showLunarCalendar: false,//阴历      
    showHoliday: true,//休假      
    showFestival: false,//节日      
    showLunarFestival: false,//农历节日      
    showSolarTerm: false,//节气     
    showMark: true,//标记      
    timeRange: {
        startYear: 1900,
        endYear: 2049
    },
    theme: {
        changeAble: false,
        weeks: {
            backgroundColor: '#FBEC9C',
            fontColor: '#4A4A4A',
            fontSize: '20px',
        },
        days: {
            backgroundColor: '#ffffff',
            fontColor: '#565555',
            fontSize: '24px'
        },
        todaycolor: 'blue',
        activeSelectColor: 'blue',
    }
}
var myCalendar = new SimpleCalendar('#container',options);
selectDay();
var data={
'date':$(".sc-select-year").val()+'-'+$(".sc-select-month").val(),
'pwId':$rootScope.user.pwId
}
employee.pwId=$rootScope.user.pwId;
myCalendar.findmysheet('2017','5',data);
 $(".sc-item").click(function() { //天数格添加点击事件。
        var year = $(".sc-select-year").val(); //获取当前选择年份。
        var month = $(".sc-select-month").val(); //获取当前选择月份。
        var day = $(this).children(".day").html(); //获取当前选择天数。
		if(month<10&&day<10){
		
		
		var date = year + "-0" + month + "-0" + day;
		
		}
		if(month<10&&day>=10){
		var date = year + "-0" + month + "-" + day;
		}
		if(month>=10&&day<10){
		var date = year + "-" + month + "-0" + day;
		}
		if(month>=10&&day>=10){
		var date = year + "-" + month + "-" + day;
		}
        
var data={

'date':date,
'pwId':$rootScope.user.pwId

}

newService.findmysheet(data,function(data){

console.log(data);

    $scope.$apply(function(){
                  $scope.sheet=data;
    });


})
});

$scope.gotohome=function(){

$state.go('tab.home');
}

/*
 $scope.datecheck=function(){
 
 
   var options = {
    date: new Date(),
    mode: 'date', // or 'time'
    allowOldDates: false,
    allowFutureDates: false,
    doneButtonLabel: 'DONE',
    doneButtonColor: '#F2F3F4',
    cancelButtonLabel: 'CANCEL',
    cancelButtonColor: '#000000',
	androidTheme:5
  };

 

    $cordovaDatePicker.show(options).then(function(date){
	var data={
	'date':date,
	'pwId':$rootScope.user.pwId
	}
       newService.findmysheet(data,function(data){
           $scope.$apply(function(){
                  $scope.sheet=data;
              });

          
    })
    });

  
 
 }
*/
})



 .controller('RegisterCtrl', function($scope,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {
 
 
$scope.user={};
  $scope.next=function(){
  if($scope.user.pwId==undefined||$scope.user.password==undefined)	{

  			mui.toast('请输入有效地信息');
  }else{
  	var data={
  		'pwId':$scope.user.pwId,
  		'password':$scope.user.password,	
}
    newService.register(data,function(data){
 	
	if(data!=null){
	console.log(data);
	employee.pwId=data.msg;
			mui.toast('注册成功');
			$state.go('registerdetail');
			
	}else{
	mui.toast('注册失败');
	}
  })
    }
 
  }
  
  


 })

 
 .controller('RegisterdetailCtrl', function($scope,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {

  $scope.user={};
  var data={};
  newService.findAllEmployee(data,function(data){
 var arr=[];
 $.each(data,function(index,element){
  if(element.name!=null){
  arr.push(element);
  }
 })
 console.log(arr);
  $scope.employees=arr;
  });
  $scope.next=function(){
  if($scope.user.phone==undefined){
  
  mui.toast('请输入有效地信息');
  }else{
  
  var data={
  "pwId":employee.pwId,
 "name":  $scope.user.name,
 "phone":   $scope.user.phone,
 "superId":$('#test option:selected') .val()
 }
  newService.registerdetail(data,function(data){
  
  console.log(data);
  employee.name=data.name;
  employee.phone=data.phone;
  employee.superId=data.superId;
  $state.go('login');
  
  });
  
  }
  }
  


 })
 
 
 .controller('SeatCtrl', function($scope,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {
var data={};
$scope.date=new Date().Format("yyyy-MM-dd");
newService.findAllseat(data,function(data){

				for(var i=0,l=data.length;i<l;i++) {
					var arr=data[i];
					if(arr.isUsed==1){
					
					$('#'+arr.seatId).css("color","#F70909");
					}
					if(arr.isUsed==0){
					$('#'+arr.seatId).css("color","#808080");
					}
					
				}

})
 
 $scope.gotohome=function(){
 
 $state.go('tab.home');
 }
 
$scope.test=function(option){
var color=$("#"+option).css("color");
var data={

'seatId':option
}

$scope.seat={};
//红色
if(color=="rgb(247, 9, 9)"||color=="#F70909"){
newService.findSeatById(data,function(data){

console.log(data);
$scope.$apply(function(){
     $scope.seat.location=data.location;
	 $scope.seat.name=data.name;
    });


});
}
//灰色
if(color=="rgb(128, 128, 128)"||color=="#808080"){
$('#'+option).css("color","#00FF66");
newService.findSeatById(data,function(data){
console.log(data);
$scope.$apply(function(){
     $scope.seat.location=data.location;
	  $scope.seat.name=data.name;
    });

});
}

//绿色
if(color=="rgb(0, 255, 102)"||color=="#00FF66"){
$('#'+option).css("color","#808080");	
}



}


 })
 
 
 
 .controller('StatisCtrl', function($scope,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {

$scope.ishasData=false;
 $scope.gotoexception=function(option){
 $rootScope.result=option;
 $state.go('tab.exception');
 }
 
 
 var year= new Date().Format("yyyy");
var month= new Date().Format("MM");
 $scope.year=year;
 $scope.month=month;
 var data={
 "month":$scope.year+"-"+$scope.month
 }
 $rootScope.date=$scope.year+"-"+$scope.month;
 newService.findResultByDate(data,function(data){
 
 if(data!=null){

$scope.$apply(function(){
$scope.ishasData=true;

});
setchartsstyle();
var leaveearly=0;
 var comelate=0;
 var leave=0;
 var forgetcheck=0;

for(var i=0,l=data.length;i<l;i++) {
					var arr=data[i];
console.log(arr);
if(arr.result=="早退"){
leaveearly++;
}
if(arr.result=="迟到"){
comelate++;
}
if(arr.result=="旷工"){
leave++;
}
if(arr.result=="漏刷卡"){
forgetcheck++;
}

}

 $scope.leaveearly=leaveearly;
$scope.comelate=comelate;
$scope.leave=leave;
$scope.forgetcheck=forgetcheck;

	var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: $scope.year+"-"+$scope.month+'考勤统计',
				x:'center',
                y:'top',
                textAlign:'left'
            },
            tooltip: {},
            xAxis: {
                data: ["早退","迟到","旷工","漏刷卡"]
            },
            yAxis: {},
            series: [{
                name: '次数',
                type: 'bar',
                data: [leaveearly, comelate, leave, forgetcheck]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
	}else{
	$scope.$apply(function(){
$scope.ishasData=false;
});
	}

})
 
 
 
 $scope.add=function(){
 
var date= addmonth(parseInt($scope.year),parseInt($scope.month));
 var arr=date.split("-");
 $scope.year=arr[0];
  if(arr[1]<10){
 $scope.month='0'+arr[1];
 }else{
 $scope.month=arr[1];
 }
var data={

"month":$scope.year+"-"+$scope.month
}
 $rootScope.date=$scope.year+"-"+$scope.month;
newService.findResultByDate(data,function(data){
if(data!=null){

$scope.$apply(function(){
$scope.ishasData=true;

});
var leaveearly=0;
 var comelate=0;
 var leave=0;
 var forgetcheck=0;
 setchartsstyle();

for(var i=0,l=data.length;i<l;i++) {
					var arr=data[i];
console.log(arr);
if(arr.result=="早退"){
leaveearly++;
}
if(arr.result=="迟到"){
comelate++;
}
if(arr.result=="旷工"){
leave++;
}
if(arr.result=="漏刷卡"){
forgetcheck++;
}

}
 $scope.leaveearly=leaveearly;
$scope.comelate=comelate;
$scope.leave=leave;
$scope.forgetcheck=forgetcheck;
	var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: $scope.year+"-"+$scope.month+'考勤统计',
				x:'center',
                y:'top',
                textAlign:'left'
            },
            tooltip: {},
            xAxis: {
                data: ["早退","迟到","旷工","漏刷卡"]
            },
            yAxis: {},
            series: [{
                name: '次数',
                type: 'bar',
                data: [leaveearly, comelate, leave, forgetcheck]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

}else{
$scope.$apply(function(){
$scope.ishasData=false;
});
}

})

 }
 
 
 $scope.reduce=function(){

 var date= reducemonth(parseInt($scope.year),parseInt($scope.month))
 var arr=date.split("-");
 $scope.year=arr[0];
 if(arr[1]<10){
 $scope.month='0'+arr[1];
 }else{
 $scope.month=arr[1];
 }
 var data={

"month":$scope.year+"-"+$scope.month
}
 $rootScope.date=$scope.year+"-"+$scope.month;
 newService.findResultByDate(data,function(data){
if(data!=null){

$scope.$apply(function(){
 $scope.ishasData=true;

    });
var leaveearly=0;
 var comelate=0;
 var leave=0;
 var forgetcheck=0;
 setchartsstyle();
for(var i=0,l=data.length;i<l;i++) {
					var arr=data[i];
console.log(arr);
if(arr.result=="早退"){
leaveearly++;
}
if(arr.result=="迟到"){
comelate++;
}
if(arr.result=="旷工"){
leave++;
}
if(arr.result=="漏刷卡"){
forgetcheck++;
}

}


var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: $scope.year+"-"+$scope.month+'考勤统计',
				x:'center',
                y:'top',
                textAlign:'left'
            },
            tooltip: {},
            xAxis: {
                data: ["早退","迟到","旷工","漏刷卡"]
            },
            yAxis: {},
            series: [{
                name: '次数',
                type: 'bar',
                data: [leaveearly, comelate, leave, forgetcheck]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


 $scope.leaveearly=leaveearly;
$scope.comelate=comelate;
$scope.leave=leave;
$scope.forgetcheck=forgetcheck;	
	
}else{

$scope.$apply(function(){
 $scope.ishasData=false;
    });
}
})
 
 
 }
$scope.gotohome=function(){

$state.go('tab.home');
}
 


 })
 
 

.controller('TestCtrl', function($scope,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {

$scope.insert=function(){
var data={
"msg":1
}
newService.insertReocrd(data,function(data){

console.log(data);
})

}

$scope.checkout=function(){
var data={
"seatId":1,
"isUsed":1,
"pwId":1557881
}
newService.checkout(data,function(data){
if(data.msg=="success"){
var alertPopup = $ionicPopup.alert({
       title: '签退成功'
     });
}

if(data.msg=="none"){
var alertPopup = $ionicPopup.alert({
       title: '请先签到'
     });
}
})


}



$scope.test=function(){

var data={
"seatId":23,
"isUsed":1,
"pwId":	1557881
}
newService.checkin(data,function(data){
if(data.msg=="success"){
var alertPopup = $ionicPopup.alert({
       title: '签到成功'
     });
}
if(data.msg=="check"){
var alertPopup = $ionicPopup.alert({
       title: '请不要重复签到'
     });


}


})

}

})




 .controller('UserCtrl', function($scope,$interval,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {

 $scope.gotoupload=function(){
 
 $state.go('tab.upload');
 
 }
 
 
 $scope.doRefresh=function(){

var msg={

"pwId":$rootScope.user.pwId

}

newService.findUser(msg,function(data){
$rootScope.user.headportrait=data.headportrait;
$scope.$broadcast('scroll.refreshComplete');
});
}

$scope.gotouserdetail=function(){

 $state.go('tab.userdetail');
}
 
 
$scope.exit=function(){
//确认



  var confirmPopup = $ionicPopup.confirm({
       title: '你确定要退出系统吗',
       template: ''
     });
     confirmPopup.then(function(res) {
       if(res) {
	   localStorage.clear();
	   $rootScope.user=null;
         $state.go('login');
		 
       } else {
         console.log('You are not sure');
       }
     });

}
 


 })
 
 
 
  .controller('UserdetailCtrl', function($scope,$interval,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {

  var data={
  
  "pwId":$rootScope.user.pwId
  }
  newService.findemployeeById(data,function(data){

console.log(data);
$scope.test=data;
})
  
$scope.save=function(){
var data={
"pwId":$scope.test.pwId,
"phone":$scope.test.phone,
"position":$scope.test.position,
"name":$scope.test.name

}
newService.updateUser(data,function(data){
if(data.msg=="success"){
 
     var alertPopup = $ionicPopup.alert({
       title: '保存成功',
     });
     alertPopup.then(function(res) {
       
     });
   


}

})

}
 
$scope.gotouser=function(){

$state.go('tab.user');
}

 })