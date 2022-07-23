angular.module("myApp")
    .service('CallService', function ($rootScope) {
        $rootScope.countXo = 0;
        $rootScope.countAcc = 0;
        this.setXo = function () {
            ++$rootScope.countXo;
        };
        this.setAcc = function () {
            ++$rootScope.countAcc;
        };
        this.getXo = function () {
            return $rootScope.countXo;
        };
        this.getAcc = function () {
            return $rootScope.countAcc;
        };
    });