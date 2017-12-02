var myApp=angular.module('myApp',[],function () {
    
})
    .directive('customTags',function () {
        return {
            restrict:'EC',
            templateUrl:'temp/test.html',
            replace:true
        }
    })
    .controller('firstController',function ($scope) {
        $scope.name='ban';
    })
