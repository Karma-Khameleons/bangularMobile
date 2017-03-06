"use strict";

app.controller("login", function($scope){

$scope.user = {
	username: '',
	password: ''
};

  $scope.login = function() {
      $http({
        url: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password
        }
      }).then(res => {
        if (res.data.success === true) {
            console.log(res)
            $location.path('/');
        } else {
            // Show dialog element telling user that registration failed
        }
      });
  };

});