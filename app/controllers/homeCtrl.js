"use strict";

app.controller("home", function($scope, productFactory){
	/* 
		Author: Abby
		Purpose: Display 20 products on the home page
		Factory: productFactory.js
	*/

	$scope.title = "Bangazon";

	let data = [
			{
 			   "seller": "Suzy",
 			   "product_type": "School Supplies",
 			   "name": "Leftie Scissor",
 			   "description": "For the Lefties",
 			   "price": 2.99,
 			   "quantity": 1
			},
			{
 			   "seller": "Suzy",
 			   "product_type": "School Supplies",
 			   "name": "Leftie Scissor",
 			   "description": "For the Lefties",
 			   "price": 2.99,
 			   "quantity": 1
			},
			{
 			   "seller": "Suzy",
 			   "product_type": "School Supplies",
 			   "name": "Leftie Scissor",
 			   "description": "For the Lefties",
 			   "price": 2.99,
 			   "quantity": 1
			}
		];

	$scope.products = data;

	// Immediately call the factory to return products. 
	// Set the scope to the array being returned from the factory
	// productFactory.getProducts()
	// 	.then( (itemArray) => {
	// 		$scope.products = itemArray;
	// 		$scope.$apply();
	// 	}); 

});