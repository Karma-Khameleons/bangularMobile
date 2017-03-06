"use strict";

app.controller("productList", function($scope, productFactory, $routeParams){
    $scope.title = 'Product List';
    
    $scope.allProducts = productFactory.allProducts();
});