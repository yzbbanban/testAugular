# testAugular
学习 angular


grunt 压缩文件

http://www.gruntjs.net/

http-server 模拟后台数据

karma 测试
jasmine 测试
protractor



<html ng-app ng-init=“AccountId=1;”>

<b>{{ AccountId }}</b>





1、<body ng-app>
        {{111}}
    <body>
2、<div ng-app=“”>
        <input type=“text" ng-model=“name” value=“”/>
        {{name}}
    </div>
3、解决加载时间问题、有限加载表达式
ng-bind=“name”

4、$scope 中的 apply 方法
原始：



 



5、



6、循环遍历以及方法返回




输入刷新


7、模块





8、provider








9、多个控制器共享数据




10、angular 过滤器



 









列表搜索：

或 ng-model=“search.id"


排序：
‘-’代表反向排序
orderType为字符串，orderBy 通过此来排序，所以 click 事件里
传入需要排序的字段即可

自定义过滤器
 



正确使用 controller

  

内置指令



事件指令

节点指令


自定义指令









