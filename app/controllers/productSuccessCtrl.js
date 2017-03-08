"use strict";

app.controller("productSuccess", function($http, $location, RootFactory){
		
	RootFactory.getApiRoot()
	.then((root)=>{
		$http.get(`${root.orders}`)
		.then((obj)=>{
			let count = obj.data[0].line_items.length;
			document.getElementById("count").innerHTML = "<a href='#!/view_order'>" + 'View Cart (' + count + ')</a>';

		});
	});
});