/**
 * Created by YZBbanban on 2017/11/4.
 */
var cartControllar=function ($scope) {
    $scope.cart=[
        {
            id: '11',
            name: 'iphone4',
            quantity: 3,
            price:'1000'
        },
        {
            id: '22',
            name: 'mac',
            quantity: 1,
            price:'14000'
        },
        {
            id: '33',
            name: 'iphoneX',
            quantity: 2,
            price:'10000'
        },
        {
            id: '44',
            name: 'ipad',
            quantity: 6,
            price:'2400'
        }

    ];
    $scope.totalPrice=function () {
        var total=0;
        angular.forEach($scope.cart,function (item) {
            total+=item.quantity*item.price;
        });
        return total;
    }
    $scope.totalCount=function () {
        var count=0;
        angular.forEach($scope.cart,function (item) {
            count+=item.quantity;
        });
        return count;
    }

    $scope.remove=function (id) {
        // alert(id);
        var index =-1;
        angular.forEach($scope.cart,function (item,key) {
            // console.log(key);
            if (item.id===id){
                index=key;
            };
        });
        // alert(index);
        if(index!==-1){
            // alert(index);
            $scope.cart.splice(index,1);
        }
    };

}