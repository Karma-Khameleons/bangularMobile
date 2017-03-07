"use strict";

app.controller("productList", function($scope, productFactory, $routeParams){
    $scope.title = 'Product List';

    // binds data for all products to the template
    productFactory.getAllProducts()
    .then((allProducts)=>{
        $scope.allProducts = allProducts;
        $scope.$apply(); 
    });
});