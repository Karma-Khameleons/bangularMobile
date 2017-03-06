"use strict";

app.factory("productFactory", function($http, dbConf){
	let ProductFactory = {};

    ProductFactory.allProducts = ()=>{
        // retrieves all products from the database
        console.log("get all products");
        return new Promise((resolve, reject)=>{
            $http.get(`${dbConf.apiUrl}/products/`)
            .then((productsCollection)=>{

                // commented out because I don't think this will be necessary when using the API
                // Object.keys(productsCollection).forEach((key)=>{
                //     productsCollection[key].id = key;
                // });

                console.log("productsCollection", productsCollection);
                resolve(productsCollection);
            });
        });
    };

    ProductFactory.getProduct = (pk)=>{
        // retrieves a specific product from the database, queried via the product's primary key
        console.log("get a single product");  
        return new Promise((resolve, reject)=>{
            $http.get(`${dbConf.apiUrl}/products/${pk}/`)
            .then((prod)=>{
                console.log("prod", prod);
                resolve(prod);
            });
        });
    };

    ProductFactory.createProduct = (newProduct)=>{
        // saves a new product to the database
        console.log("create a product");
        return new Promise((resolve, reject)=>{
            $http.post(
                `${dbConf.apiUrl}/products/`, 
                angular.toJson(newProduct)
            )
            .then((itemObject)=>{
                resolve(itemObject);
            });
        });
    };

    ProductFactory.updateProduct = (updatedProduct)=>{
        // saves changes to an existing product in the database
        // accepts a product object and uses its pk attribute to target the updated product in the database
        console.log("update product");
        return new Promise((resolve, reject)=>{
            $http.put(`${dbConf.apiUrl}/products/${updatedProduct.pk}`, angular.toJson(updatedProduct))
            .then((itemObject)=>{
                resolve(itemObject);
            });
        });
    };


    return ProductFactory;

});