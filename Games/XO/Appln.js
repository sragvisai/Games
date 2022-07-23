angular.module("myApp")
    .controller("MyControllerXo", function ($scope, CallService) {
        var reload = function () {
            $scope.count = 1;
            $scope.a = "  ";
            $scope.b = "  ";
            $scope.c = "  ";
            $scope.d = "  ";
            $scope.e = "  ";
            $scope.f = "  ";
            $scope.g = "  ";
            $scope.h = "  ";
            $scope.i = "  ";
        }
        reload();
        var win_arr = new Array(9);
        $scope.fun = function (key) {
            var flag;
            if ($scope.count % 2 == 0) {
                console.log("Player2");
                flag = 'O';
            }
            else {
                console.log("Player1");
                flag = 'X';
            }
            switch (key) {
                case "one":
                    if ($scope.a != "  ") {
                        alert("Select another cell");
                        $scope.count--;
                    }
                    else {
                        $scope.a = flag;
                        win_arr[0] = flag;
                    }
                    break;
                case "two":
                    if ($scope.b != "  ") {
                        alert("Select another cell");
                        $scope.count--;
                    }
                    else {
                        $scope.b = flag;
                        win_arr[1] = flag;
                    }
                    break;
                case "three":
                    if ($scope.c != "  ") {
                        alert("Select another cell");
                        $scope.count--;
                    }
                    else {
                        $scope.c = flag;
                        win_arr[2] = flag;
                    }
                    break;
                case "four":
                    if ($scope.d != "  ") {
                        alert("Select another cell");
                        $scope.count--;
                    }
                    else {
                        $scope.d = flag;
                        win_arr[3] = flag;
                    }
                    break;
                case "five":
                    if ($scope.e != "  ") {
                        alert("Select another cell");
                        $scope.count--;
                    }
                    else {
                        $scope.e = flag;
                        win_arr[4] = flag;
                    }
                    break;
                case "six":
                    if ($scope.f != "  ") {
                        alert("Select another cell");
                        $scope.count--;
                    }
                    else {
                        $scope.f = flag;
                        win_arr[5] = flag;
                    }
                    break;
                case "seven":
                    if ($scope.g != "  ") {
                        alert("Select another cell");
                        $scope.count--;
                    }
                    else {
                        $scope.g = flag;
                        win_arr[6] = flag;
                    }
                    break;
                case "eight":
                    if ($scope.h != "  ") {
                        alert("Select another cell");
                        $scope.count--;
                    }
                    else {
                        $scope.h = flag;
                        win_arr[7] = flag;
                    }
                    break;
                case "nine":
                    if ($scope.i != "  ") {
                        alert("Select another cell");
                        $scope.count--;
                    }
                    else {
                        $scope.i = flag;
                        win_arr[8] = flag;
                    }
                    break;
            }
            if ($scope.count >= 5) {
                wincheck(win_arr);
            }
            $scope.count++;
        }
        var repeat = function () {
            CallService.setXo();
            $scope.countXo = CallService.getXo();
            reload();
            $scope.count--;
            win_arr.splice(0, 9);
        }
        var wincheck = function (win_arr) {
            var res;
            for (var i = 0; i < 8; i++) {
                switch (i) {
                    case 0: res = win_arr[0] + win_arr[1] + win_arr[2];
                        break;
                    case 1: res = win_arr[3] + win_arr[4] + win_arr[5];
                        break;
                    case 2: res = win_arr[6] + win_arr[7] + win_arr[8];
                        break;
                    case 3: res = win_arr[0] + win_arr[3] + win_arr[6];
                        break;
                    case 4: res = win_arr[1] + win_arr[4] + win_arr[7];
                        break;
                    case 5: res = win_arr[2] + win_arr[5] + win_arr[8];
                        break;
                    case 6: res = win_arr[0] + win_arr[4] + win_arr[8];
                        break;
                    case 7: res = win_arr[2] + win_arr[4] + win_arr[6];
                        break;
                }
                if (res == "XXX") {
                    $scope.over = "X won the last game";
                    //alert("X won the game");
                    repeat();
                    break;
                }
                else if (res == "OOO") {
                    $scope.over = "O won the last game";
                    //alert("O won the game");
                    repeat();
                    break;
                }
            }
            if (i == 8 && $scope.count == 9 && res != ("XXX" || "OOO")) {
                $scope.che = 1;
                $scope.over = "Last game was a draw!!!";
                //alert("It's a draw!!!");
                repeat();
            }
        }
    })