/**
 * Created by YZBbanban on 2017/11/4.
 */

var myApp = angular.module('myApp', [], function ($provide) {
    // $provide.provider('customService', function () {
    //     this.$get=function () {
    //         return{
    //             message:"customService Message"
    //         }
    //     }
    // });

    $provide.factory('customFactory',function () {
       return 'aaa';
    });

    $provide.service('customService1',function () {
        return ['ban'];
    });


});

myApp.controller('firstController', function (customService1,$scope) {
    $scope.name = customService1;
});
