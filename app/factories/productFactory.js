"use strict";

app.factory("productFactory", function($http, RootFactory){
    let ProductFactory = {};

    ProductFactory.getAllProducts = ()=>{
        // returns all products from the database via the API Root
        return new Promise((resolve, reject)=>{
            RootFactory.getApiRoot()
            .then((apiRoot)=>{
                $http({
                    url: `${apiRoot.products}`,
                    method: "GET"
                })
                .then(res => {
                    resolve(res.data);
                });
            });
        });
    };

    ProductFactory.getProduct = (pk)=>{
        // retrieves a specific product from the database, queried via the product's primary key through the API Root
        return new Promise((resolve, reject)=>{
            RootFactory.getApiRoot()
            .then((apiRoot)=>{
                $http({
                    url: `${apiRoot.products}${pk}/`,
                    method: "GET"
                })
                .then(res => {
                    resolve(res.data);
                });
            });
        });
    };

    return ProductFactory;
});