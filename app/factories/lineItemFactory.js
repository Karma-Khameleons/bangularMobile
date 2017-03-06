"use strict";

app.factory("lineItemFactory", function($http){
	
	let get_order_line_items = ()=>{
		return new Promise((resolve, reject)=>{
			$http.get("http://localhost:8000/orders/")
			.then((obj)=>{
				console.log(obj.data);
				resolve(obj.data);
			});
		});
	};
	
	return {get_order_line_items};
});