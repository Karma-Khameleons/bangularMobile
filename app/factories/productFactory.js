"use strict";

app.factory("productFactory", function($http, $window, RootFactory){
	
	//Call getApiRoot from the RootFactory

	let getProducts = () => {

		let items = [];

		return new Promise((resolve, reject) => {
			$http.get(`http://localhost:8000/products/`)
			.then((itemObject) => {
				let itemCollection = itemObject.data;			
				console.log(itemCollection);

				// Object.keys(itemCollection).forEach((key) =>{
				// 	itemCollection[key].id = key;
				// 	items.push(itemCollection[key]);
				// });
				resolve(items);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return {getProducts};

});

