var app = angular.module("MyApp", []);
app.controller("MyController", function ($scope) {
    $scope.ctrlarray = ['one', 'two', 'three', 'four', 'five'];
    $scope.selectedModel = [];
});
app.directive("myDirective", function () {
    return {
        restrict: 'E',
        transclude: 'true',
        scope: {
            array: '=',
            selected: '=',
        },
        template: `
        <div> <span style="border-style:solid;border-width: 1px;padding-left: 50px" ng-click="showDiv = !showDiv" >V</span> </div>
        <div ng-show="showDiv">
        <div ng-repeat="x in array track by $index"><input type="checkbox" ng-model="checkboxArr[$index]"  ng-change="checkboxChanged($index)">{{x}} </div>
        </div>
        `,
        link: function (scope) {
            scope.checkboxArr = [];
            scope.checkboxChanged = function (index) {
                console.log(scope.checkboxArr);
                if (scope.checkboxArr[index])
                    scope.selected.push(scope.array[index]);
                else {
                    scope.selected.splice(scope.selected.indexOf(scope.array[index]), 1);
                }
            }

        },
    };
});




   //`<select ng-model="selected" ng-options="x for x in array"></select>`