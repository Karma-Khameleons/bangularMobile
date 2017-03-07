"use strict";

app.controller("login", function($scope,$location, $http){

$scope.user = {
	username: '',
	password: ''
};

  $scope.login = function() {
      $http({
        url: "http://localhost:8000/login/",
        method: "POST",
        withCredentials: false,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password
        }
      }).then(res => {
        if (res.data.success === true) {
            console.log(res);
            $location.path('/');
        } else {
           console.log("error");
        }
      });
  };

});