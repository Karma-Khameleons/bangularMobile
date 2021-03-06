"use strict";

var app = angular.module("BangularApp", ['ngRoute'])
            .constant('apiUrl', "http://localhost:8000");

app.config(function($routeProvider, $httpProvider){

	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
	$httpProvider.defaults.withCredentials = true;

	$routeProvider
	.when("/", {
		templateUrl: "partials/home.html",
		controller: "home"
	})
	.when("/login",{
		templateUrl:"partials/login.html",
		controller: "login"
	})
	.when("/register",{
		templateUrl:"partials/register.html",
		controller: "register"
	})
	.when("/view_order",{
		templateUrl:"partials/order.html",
		controller: "order"
	})
	.when("/create_payment",{
		templateUrl:"partials/payment.html",
		controller: "payment"
	})
	.when("/product_list",{
        templateUrl:"partials/product-list.html",
        controller: "productList"
    })
    .when("/product_success",{
        templateUrl:"partials/success-product.html",
        controller: "productSuccess"
    })
    .when("/order_success",{
        templateUrl:"partials/success-order.html",
        controller: "orderSuccess"
    })
    .when("/logout", {
        templateUrl: "partials/logout.html",
        controller: "logout"
    })
    .when("/product_detail/:itemId",{
		templateUrl:"partials/product-detail.html",
		controller: "productDetail"
	})
    .otherwise("/");
}).config(function($locationProvider){
	$locationProvider.html5Mode(false);
});

