"use strict";

app.factory("productFactory", function($http){
	

	let get_all_products = ()=>{
		return new Promise((resolve, reject)=>{
			$http.get('http://localhost:8000/products/')
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	return {get_all_products};
});