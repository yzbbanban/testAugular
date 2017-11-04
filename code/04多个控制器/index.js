/**
 * Created by YZBbanban on 2017/11/4.
 */
var firstController=function($scope){
    console.log($scope)
    $scope.date=new Date();
    setInterval(function () {
        $scope.$apply(function () {
           $scope.date=new Date();
        });
    },1000);

}