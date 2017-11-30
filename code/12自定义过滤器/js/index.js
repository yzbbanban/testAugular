angular.module('myApp', [],function ($filterProvider, $provide, $controllerProvider) {
    $provide.service('Data',function () {
        return [
            {
                name:'ban',
                age:23
            },
            {
                name:'uu',
                age:13
            }
        ]
    });
    $filterProvider.register('filterAge',function () {
        return function (obj) {
            console.log('-->'+obj);
            var newObj=[];
            angular.forEach(obj,function (o) {
                console.log('==>'+o);
                if (o.age>20){
                    newObj.push(o);
                }
            });
            return newObj;
        }
    });
    $controllerProvider.register('firstController',function ($scope,Data) {
        console.log(Data)
        $scope.data=Data;
        
    })
    
})
    .filter('filterAge2',function () {
        return function (obj) {
            console.log('-->'+obj);
            var newObj=[];
            angular.forEach(obj,function (o) {
                console.log('==>'+o);
                if (o.age>20){
                    newObj.push(o);
                }
            });
            return newObj;
        }
    })
