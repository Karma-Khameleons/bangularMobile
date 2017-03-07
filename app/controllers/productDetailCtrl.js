"use strict";

app.controller("productDetail", function($scope, productFactory, $routeParams){
	$scope.title = 'Product Detail';

    // binds queried product data to the template
    productFactory.getProduct($routeParams.itemId)
    .then((product)=>{
        $scope.product = product;
        $scope.$apply();
    });
});