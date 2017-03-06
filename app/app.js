"use strict";

var app = angular.module("BangularApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when("/home", {
		templateUrl: "partials/home.html",
		controller:
	})
	.when("/login",{
		templateUrl:"partials/login.html",
		controller:
	})
	.when("/register",{
		templateUrl:"partials/register.html",
		controller:
	})
	.when("/view_order",{
		templateUrl:"partials/order.html",
		controller:
	})
	.when("/create_payment",{
		templateUrl:"partials/payment.html",
		controller:
	})
	.when("/product_detail",{
		templateUrl:"partials/product-detail.html",
		controller:
	})
	.when("/product_success",{
		templateUrl:"partials/success-product.html",
		controller:
	})
	.when("/order_success",{
		templateUrl:"partials/success-order.html",
		controller:
	})
	.otherwise("/home");
}).config(function($locationProvider){
	$locationProvider.html5Mode(true);
});