var myApp = angular.module('myApp', [], function () {

})
    .factory('CustomService', function () {
        console.log(window);
    })
    .controller('firstController', function ($scope,CustomService) {
        console.log(CustomService);
    })

    .controller('secondController', ['$scope', '$filter', function (a, b) {
        // console.log(a);
        // console.log(b);
        console.log(b('json')([1, 2, 3, 4, 5]));
    }])

function otherController(a) {
    console.log(a)
}

otherController.$inject=['$scope'];