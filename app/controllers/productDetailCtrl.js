"use strict";

app.controller("productDetail", function($scope, productFactory, $routeParams){
	$scope.title = 'Product Detail';
    $scope.product = productFactory.getProduct($routeParams.itemId);
});