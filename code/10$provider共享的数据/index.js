/**
 * Created by YZBbanban on 2017/11/4.
 */
angular.module('myApp', [])
    .factory('date', function () {
        return {
            name: "uu"
        }
    })
    .controller('firstController', function (date, $scope) {
        $scope.date = date;
    })
    .controller('secondController', function (date, $scope) {
        $scope.date = date;
    })