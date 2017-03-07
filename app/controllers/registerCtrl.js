"use strict";

app.controller("register", function($scope, $location, $http){

	$scope.user = {
	  username: "",
	  password: "",
	  email: "",
	  first_name: "",
	  last_name: "",
    street_address: "",
    city: "",
    state: "",
    zip_code: ""
	};

	 $scope.register = function() {
      $http({
        url: "http://localhost:8000/register/",
        method: "POST",
        withCredentials: false,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",

        },
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password,
          "email": $scope.user.email,
          "first_name": $scope.user.first_name,
          "last_name": $scope.user.last_name,
          "street_address": $scope.user.street_address,
          "city": $scope.user.city,
          "state": $scope.user.state,
          "zip_code": $scope.user.zip_code
        }
      }).then(res => {
        if (res.data.success === true) {
            $location.path('/');
        } else {
            console.log("error", error );
        }
      });
  };
	
});