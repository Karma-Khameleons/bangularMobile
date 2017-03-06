"use strict";

app.controller("productDetail", function($scope, productFactory, $routeParams){
	$scope.title = 'Product Detail';
    
    // temporary hard_coding of product pk
    $scope.product = productFactory.getProduct($routeParams.itemId);
    // $scope.product = productFactory.getProduct(1);
});