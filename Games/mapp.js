var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/XO", {
            templateUrl: "./XO/AXO.html",
            controller: "MyControllerXo"
        })
        .when("/Accuracy", {
            templateUrl: "./Accuracy/AGame.html",
            controller: "MyControllerAcc"
        })
});