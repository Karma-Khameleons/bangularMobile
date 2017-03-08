"use strict";

app.controller("home", function($scope, productFactory){
	/* 
		Author: Abby
		Purpose: Search and display products on the home page
		Factory: productFactory.js
	*/

	//Immediately call the factory to return products. 
	//Set the scope to the array being returned from the factory
	productFactory.getAllProducts()
		.then( (itemArray) => {
			$scope.products = itemArray;
			$scope.$apply();
		}); 

});