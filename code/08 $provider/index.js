/**
 * Created by YZBbanban on 2017/11/4.
 */

var myApp = angular.module('myApp', [], function ($provide) {
    $provide.provider('customService', function () {
        this.$get=function () {
            return{
                message:"customService Message"
            }
        }
    });


});

myApp.controller('firstController', function (customService,$scope) {
    $scope.name = customService;
});
