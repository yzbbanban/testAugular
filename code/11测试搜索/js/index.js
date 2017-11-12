angular.module('product', [])
    .service('productData', function () {
        return [
            {
                id: '11',
                name: 'iphone4',
                price: '1000'
            },
            {
                id: '66',
                name: 'mac',
                price: '14000'
            },
            {
                id: '33',
                name: 'iphoneX',
                price: '10000'
            },
            {
                id: '09',
                name: 'ipad',
                price: '2400'
            }

        ];
    })
    .controller('productController', function ($scope,productData) {
        $scope.productData=productData;
        $scope.orderType='id';
        $scope.order='-';
        $scope.changeOrder=function (type) {
            $scope.orderType=type;
            if ( $scope.order===''){
                $scope.order='-'
            }else{
                $scope.order='';
            }
        }
    })
