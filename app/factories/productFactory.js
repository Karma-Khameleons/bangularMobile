"use strict";

app.factory("productFactory", function($http, dbConf){
	let ProductFactory = {};

    ProductFactory.getAllProducts = ()=>{
        // retrieves all products from the database
        return new Promise((resolve, reject)=>{
            $http.get(`${dbConf.apiUrl}/products.json`)
            .then((responseObject)=>{
                let productsCollection = responseObject.data;
                resolve(productsCollection);
            });
        });
    };

    ProductFactory.getProduct = (pk)=>{
        // retrieves a specific product from the database, queried via the product's primary key
        return new Promise((resolve, reject)=>{
            $http.get(`${dbConf.apiUrl}/products/${pk}.json`)
            .then((responseObject)=>{
                let product = responseObject.data;
                resolve(product);
            });
        });
    };

    ProductFactory.createProduct = (newProduct)=>{
        // saves a new product to the database
        console.log("create a product");

        $http({
            url: `${dbConf.apiUrl}/create_product.json`,
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: newProduct
        })
        .then(res => {
            console.log("results:", res);
        });
    };



    ProductFactory.updateProduct = (updatedProduct)=>{
        // saves changes to an existing product in the database
        // accepts a product object and uses its pk attribute to target the updated product in the database
        console.log("update product");

        $http({
            url: `${dbConf.apiUrl}/products/${updatedProduct.pk}.json`,
            method: "PUT",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: updatedProduct
        })
        .then(res => {
            console.log("results:", res);
        });



    };


    return ProductFactory;

});