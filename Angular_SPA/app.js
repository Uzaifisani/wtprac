var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
      .when('/',{
            templateUrl:'first.html',
            controller:'FirstController'
        })
      .when('/second',{
            templateUrl:'second.html',
            controller:'SecondController'
        })
      .when('/third',{
            templateUrl:'third.html',
            controller:'ThirdController'
        })
      .otherwise({
            redirectTo:'/'
        });
    });
        app.controller('FirstController',function($scope){
            $scope.message='Hello this is First Controller';
        });
        app.controller('SecondController',function($scope){
            $scope.message='Hello this is Second Controller';
        });
        app.controller('ThirdController',function($scope){
            $scope.message='Hello this is Third Controller';
        });