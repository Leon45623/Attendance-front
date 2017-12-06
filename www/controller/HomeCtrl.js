angular.module('controller.home', ['ionic','ngCordova'])



.controller('HomeCtrl', function($interval,$scope,$cordovaBarcodeScanner,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {


setStyle();
$scope.pageBean={};
var data={

			"currentPage":1,
			"pageSize":3,
			"superId":$rootScope.user.pwId

}
newService.findPageBean(data,function(data){
console.log(data);
if(data!=null){
$scope.$apply(function(){

$scope.pageBean=data;
});
}

})

var timer=$interval(function(){
var data=null;
if($scope.pageBean!=null){
data={

			"currentPage":$scope.pageBean.currentPage,
			"pageSize":$scope.pageBean.pageSize,
			"superId":$rootScope.user.pwId

}
}else{

 data={

			"currentPage":1,
			"pageSize":3,
			"superId":$rootScope.user.pwId

}



}
newService.findPageBean(data,function(data){

if(data!=null){
$scope.$apply(function(){

$scope.pageBean=data;
});
}

})

},3000)

$scope.$on('$destroy',function(){
  $interval.cancel(timer);
})



$scope.gotolast=function(){

			if($scope.pageBean.currentPage==1){

			}else{
			var data={
					
					"currentPage":$scope.pageBean.currentPage-1,
					"pageSize":$scope.pageBean.pageSize,
					"superId":$rootScope.user.pwId
			}
			newService.findPageBean(data,function(data){


                   $scope.$apply(function(){

                             $scope.pageBean=data;
                         });
                   })		
			}


}


$scope.gotonext=function(){
	
			if($scope.pageBean.currentPage>$scope.pageBean.totalPages){

			}else{
			var data={
					
					"currentPage":$scope.pageBean.currentPage+1,
					"pageSize":$scope.pageBean.pageSize,
					"superId":$rootScope.user.pwId
			}
				newService.findPageBean(data,function(data){


                   $scope.$apply(function(){

                             $scope.pageBean=data;
                         });
                   })	
			
			
			}


}


  $scope.gotocheck=function(){
  
  $state.go('tab.check');
  }
  
  
  
 $scope.gotoSeat=function(){
 
 $state.go('tab.seat');
 }
 
 
 $scope.gotomysheet=function(){
 $state.go('tab.mysheet');
 }
 
 $scope.gotostatis=function(){
 
 $state.go('tab.statis');
 }

 
 
  $scope.checkin=function(){
  $cordovaBarcodeScanner.scan().then(
function(imageData){

var url=imageData.text;
var num=url.indexOf("?");
url=url.substr(num+1);
var n1=url.indexOf("=");
var seatId=url.substr(n1+1);
var data={
"seatId":seatId,
"isUsed":1,
"pwId":$rootScope.user.pwId
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


},function(error){
alert("hehe");

});
}




$scope.checkout=function(){
  $cordovaBarcodeScanner.scan().then(
function(imageData){

var url=imageData.text;
var num=url.indexOf("?");
url=url.substr(num+1);
var n1=url.indexOf("=");
var seatId=url.substr(n1+1);
var data={
"seatId":seatId,
"isUsed":1,
"pwId":$rootScope.user.pwId
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
},function(error){
alert("hehe");

}); 

 }
 
 
 $scope.gotolist=function(){
  
  $state.go('tab.employeelist');
  
  }
 })
 
 