var myApp = angular.module('myApp', [], ['$compileProvider', function ($compileProvider) {
    $compileProvider.directive('customTags', function () {
        return {
            restrict: 'E',
            template: '<div>ban</div>'
        }
    });
}]);
