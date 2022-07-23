angular.module("myApp")
    .controller("MyControllerAcc", function ($scope, $timeout, $interval, CallService) {
        $scope.game = function () {
            $scope.score = 0;
            $scope.next = 0;
            $scope.countArr = new Array(Number($scope.input));
            var timer = $interval(function () {
                $scope.ran = Math.floor(Math.random() * $scope.input);
                while ($scope.ran == $scope.next)
                    $scope.ran = Math.floor(Math.random() * $scope.input);
                $scope.flag = 0;
                $scope.next = $scope.ran;
                console.log($scope.ran);
                $scope.checkMatching = function (ind) {
                    if (ind == $scope.ran && $scope.flag == 0) {
                        $scope.score++;
                        $scope.flag = 1;
                    }
                }
            }, 700);
            $timeout(function () {
                $interval.cancel(timer);
                //alert("Your score is: " + $scope.score);
                CallService.setAcc();
                $scope.countAcc = CallService.getAcc();
            }, 1000 * 20);
        }
    })
    .directive("showBoxes", function () {
        return {
            restrict: 'E',
            transclude: 'true',
            scope: {
                clickfun: "&",
                index: "=",
                random: "="
            },
            template: '<div class="blocks" ng-class="{test: index == random}" ng-click="clickfun(index)"></div>',
        };
    });