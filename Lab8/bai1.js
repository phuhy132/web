app= angular.module("b3",[]);
 app.controller("handle__form",xuly);
 function xuly($scope){
   $scope.handle=function(){
       if($scope.tensp &&  $scope.nsx && $scope.tinhtrang!==undefined && $scope.maudo||$scope.mauden||$scope.mautrang!==undefined){
           $scope.fullname='Bạn Đã Nhập Dữ Liệu Chính Xác'
          setTimeout(function(){
              window/location.replace('https://longnv.name.vn/lap-trinh-javascript')
          },3000)
       } 
   }
     
     }