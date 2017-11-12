angular.module('product', [])
    .service('productData', function () {
        return [
            {
                id: '11',
                name: 'iphone4',
                price: '1000'
            },
            {
                id: '22',
                name: 'mac',
                price: '14000'
            },
            {
                id: '33',
                name: 'iphoneX',
                price: '10000'
            },
            {
                id: '44',
                name: 'ipad',
                price: '2400'
            }

        ];
    })
    .controller('productController', function ($scope,productData) {
        $scope.productData=productData;

    })
