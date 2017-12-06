angular.module('starter', ['ionic', 
 'starter.services','starter.controllers','controller.exception','controller.home'])
/*
.run(function($ionicPlatform,$rootScope,$location,$state) {
    $rootScope.$on("$locationChangeStart", function () {
              //监听url变化，在变化前做想要的处理
              if($location.url()=="/register"){
              $state.go('register');
              }
              else if($rootScope.user==null){
              console.log('user:',$rootScope.user);
                  $state.go('login');
              }
    });
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });

})
*/

 .run(function ($ionicPlatform, $ionicPopup, $rootScope, $location,$ionicHistory) {
            //主页面显示退出提示框
            $ionicPlatform.registerBackButtonAction(function (e) {
                e.preventDefault();
                function showConfirm() {
                    var confirmPopup = $ionicPopup.confirm({
                        title: '<strong>退出应用?</strong>',
                        template: '你确定要退出应用吗?',
                        okText: '退出',
                        cancelText: '取消'
                    });

                    confirmPopup.then(function (res) {
                        if (res) {
                            ionic.Platform.exitApp();
                        } else {   }
               });
                 }
                              if ($location.path() == '/tab/home'|| $location.path() == '/tab/user') {
                                  showConfirm();
                              } else{
                                  $ionicHistory.goBack();
                              }
                              return false;
             }, 101);

  })









.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
$ionicConfigProvider.platform.android.tabs.style('standard');
$ionicConfigProvider.platform.android.tabs.position('bottom');
$ionicConfigProvider.platform.android.navBar.alignTitle('center');
$ionicConfigProvider.platform.android.views.transition('android');
$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

$stateProvider

.state('test',{
url:"/test",
templateUrl:"templates/test.html",
controller:"TestCtrl",
cache:false
})



.state('login',{
url:"/login",
templateUrl:"templates/login.html",
controller:"LoginCtrl",
cache:false
})


.state('register',{
url:"/register",
templateUrl:"templates/register.html",
controller:"RegisterCtrl",
cache:false
})


.state('registerdetail',{
url:'/registerdetail',
templateUrl:'templates/registerdetail.html',
controller:'RegisterdetailCtrl'	,
cache:false
})	

.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tab.html'
})

.state('tab.home',{
url:'/home',
  views: {
      'newsHomeContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
})	

.state('tab.user',{
url:'/user',
  views: {
      'userContent': {
        templateUrl: 'templates/user.html',
        controller: 'UserCtrl'
      }
    },
cache:false
})


.state('tab.employeelist',{
url:'/employeelist',
  views: {
      'newsHomeContent': {
        templateUrl: 'templates/employeelist.html',
        controller: 'EmployeelistCtrl'
      }
    },
cache:false
})


.state('tab.seat',{
url:'/seat',
  views: {
      'newsHomeContent': {
        templateUrl: 'templates/seat.html',
        controller: 'SeatCtrl'
      }
    },
cache:false
})


.state('tab.mysheet',{
url:'/mysheet',
  views: {
      'newsHomeContent': {
        templateUrl: 'templates/mysheet.html',
        controller: 'MysheetCtrl'
      }
    },
cache:false
})


.state('tab.statis',{
url:'/statis',
  views: {
      'newsHomeContent': {
        templateUrl: 'templates/statis.html',
        controller: 'StatisCtrl'
      }
    }
})


.state('tab.exception',{
url:'/exception',
  views: {
      'newsHomeContent': {
        templateUrl: 'templates/exception.html',
        controller: 'ExceptionCtrl'
      }
    }
})

.state('tab.check',{
url:'/check',
  views: {
      'newsHomeContent': {
        templateUrl: 'templates/check.html',
        controller: 'CheckCtrl'
      }
    },	
cache:false

})

.state('tab.batch',{
url:'/batch',
  views: {
      'newsHomeContent': {
        templateUrl: 'templates/batch.html',
        controller: 'BatchCtrl'
      }
    },
cache:false
})


.state('tab.batchdetail',{
url:'/batchdetail',
  views: {
      'newsHomeContent': {
        templateUrl: 'templates/batchdetail.html',
        controller: 'BatchdetailCtrl'
      }
    },
cache:false
})

.state('tab.addemployee',{
url:'/addemployee',
  views: {
      'newsHomeContent': {
        templateUrl: 'templates/addemployee.html',
        controller: 'AddemployeeCtrl'
      }
    },
cache:false,
params:{'pwId':null}
})


.state('tab.employeeInfo',{
url:'/employeeInfo',
  views: {
      'newsHomeContent': {
        templateUrl: 'templates/employeeInfo.html',
        controller: 'EmployeeInfoCtrl'
      }
    },
cache:false,
params:{'pwId':null}
})


.state('tab.upload',{
url:'/upload',
  views: {
      'userContent': {
        templateUrl: 'templates/upload.html',
        controller: 'UploadCtrl'
      }
    },
cache:false
})


.state('tab.userdetail',{
url:'/userdetail',
  views: {
      'userContent': {
        templateUrl: 'templates/userdetail.html',
        controller: 'UserdetailCtrl'
      }
    },
cache:false
})


$urlRouterProvider.otherwise('/login');




});
