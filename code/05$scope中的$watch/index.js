/**
 * Created by YZBbanban on 2017/11/4.
 */
var firstController=function($scope){
    $scope.name="ban";
    $scope.count=0;

    $scope.$watch('name',function (newValue,oldValue) {
        console.log(newValue+","+oldValue);
        ++$scope.count;
        if ($scope.count>30){
            $scope.name="已大于30";
        }
    })
}