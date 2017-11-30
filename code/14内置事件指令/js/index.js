var myApp=angular.module('myApp',[],function () {

})
.controller('firstController',function ($scope) {
    $scope.status=true;
    $scope.changeStatus=function (event) {
        $scope.status=!$scope.status;
        angular.element(event.target).html('当前状态为: '+$scope.status);
    }
})