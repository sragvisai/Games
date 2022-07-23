var app = angular.module("MyApp", []);
app.controller("MyController", function ($scope) {
});
app.directive("menuDir", function () {
    return {
        restrict: 'E',
        transclude: 'true',
        scope: {
        },
        templateUrl: "menu.html"
    };
});
app.directive("createDir", function (storageservice) {
    return {
        restrict: 'E',
        transclude: 'true',
        scope: {
        },
        templateUrl: "create.html",
        controller: function ($scope, $rootScope) {
            $scope.act = {};
            $scope.onSubmit = function () {
                storageservice.setData(angular.copy($scope.act));
                $rootScope.$broadcast('activityAdded');
                $scope.form1.$setPristine();
                $scope.act = {};
                $scope.form1.$setUntouched();
            }
        },
    };
});
app.directive("recordDir", function (storageservice) {
    return {
        restrict: 'E',
        transclude: 'true',
        scope: false,
        templateUrl: "record.html",
        controller: function ($scope) {
            $scope.carray = [];
            //$scope.c = 0;
            $scope.$on('activityAdded', function () {
                $scope.carray = angular.copy(storageservice.getData());
                // console.log(JSON.parse(JSON.stringify($scope.carray));
                //console.log(carray);
            });
        }
    };
});
app.service("storageservice", function () {
    //var count = 0;
    var array = [];
    this.setData = function (obj) {
        // var record = {};
        // record.activityName = a;
        // record.startDate = b;
        // record.endDate = c;
        // record.activityType = d;
        // array.push(record);
        // console.log(array[count]);
        // count++;
        if (obj.asdate <= obj.aedate)
            array.push(obj);
    }
    this.getData = function () {
        return array;
    }
})






































// app.service("storageservice", function () {
//     var count = 0;
//     var array = [];
//     this.setData = function (a, b, c, d) {
//         var record = {};
//         record.activityName = a;
//         record.startDate = b;
//         record.endDate = c;
//         record.activityType = d;
//         array[count] = record;
//         console.log(array[count]);
//         count++;
//     }
//     this.getData = function () {
//         console.log(array[count - 1]);
//         return array[count - 1];
//     }
// })