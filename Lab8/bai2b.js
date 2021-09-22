var clock = null;
function tg() {
    var now = new Date();
    var hour = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    document.getElementById('hour').innerHTML=hour;
    document.getElementById('m').innerHTML=m;
    document.getElementById('s').innerHTML=s;
}
app = angular.module("b2", []);
app.controller("ctr1", xuly);
function xuly($scope) {
    $scope.study = function () {
        window.location = "https://longnv.name.vn/lap-trinh-javascript";
    }
    $scope.continueTg = function () {
        if (clock == null) {
            clock = setInterval("tg()", 1000);
        }
    }
    $scope.stopTg = function () {
        if (clock != null) {
            clearInterval(clock);
            clock = null;
        };
    }
}