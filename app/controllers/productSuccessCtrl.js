"use strict";

app.controller("productSuccess", function($scope, $location, lineItemFactory){

	lineItemFactory.get_order_line_items().then((obj)=>{
		let count = obj[0].line_items.length;
		document.getElementById("count").innerHTML = "<a href='#!/view_order'>" + 'View Cart (' + count + ')</a>';
	});
});