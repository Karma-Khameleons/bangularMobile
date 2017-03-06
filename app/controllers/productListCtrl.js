"use strict";

app.controller("productList", function($scope, productFactory, $routeParams){
    $scope.title = 'Product List';
    productFactory.getAllProducts()
    .then((allProducts)=>{
        $scope.allProducts = allProducts;
        $scope.$apply(); 
    });
});