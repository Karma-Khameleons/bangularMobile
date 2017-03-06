"use strict";

app.controller("productDetail", function($scope, productFactory, $routeParams){
	$scope.title = 'Product Detail';
    productFactory.getProduct($routeParams.itemId)
    .then((product)=>{
        $scope.product = product;
        $scope.$apply();
    });
});