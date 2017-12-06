var exceptionModule=angular.module('controller.exception', [])
 exceptionModule.controller('ExceptionCtrl', function($scope,$ionicPopup,$timeout,$state,$rootScope,$location,newService) {

$scope.gotostatis=function(){
$state.go('tab.statis');
}
$scope.gotoemployeeInfo=function(option){

$state.go('tab.employeeInfo',{pwId:option});
}

console.log($rootScope.result);
console.log($rootScope.date);
var data={
"month":$rootScope.date,
"result":$rootScope.result
}
newService.findEmployeeByResult(data,function(data){
console.log(data);
$scope.employees=data;
})
 })
 //唯一性过滤器
 exceptionModule.filter('unique',function(){
 return function(collection,keyname){
 var output=[],
 keys=[];
 angular.forEach(collection,function(item){
 var key=item[keyname];
 if(keys.indexOf(key)===-1){
 keys.push(key);
 output.push(item);
 }
 });
 return output;
 };
 });