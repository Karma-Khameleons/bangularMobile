"use strict";

app.controller("productDetail", function($scope, productFactory){
	$scope.title = 'Product Detail';
    
    // temporary hard_coding of product pk
    $scope.allProducts = productFactory.getProduct(1);
});