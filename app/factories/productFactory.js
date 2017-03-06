"use strict";

app.factory("productFactory", function(){
	let ProductFactory = {};

    ProductFactory.allProducts = ()=>{
        // retrieves all products from the database
        console.log("get all products");
        return new Promise((resolve, reject)=>{
            $http.get(`${dbConf.apiUrl}/products`)
            .success((productsCollection)=>{
                Object.keys(productsCollection).forEach((key)=>{
                    productsCollection[key].id = key;
                });
                console.log("productsCollection", productsCollection);
                resolve(productsCollection);
            })
            .error((error)=>{
                reject(error);
            });
        });
    };

    ProductFactory.getProduct = (pk)=>{
        // retrieves a specific product from the database, queried via the product's primary key
        console.log("get a single product");  
    };

    ProductFactory.createProduct = (prodObj)=>{
        // saves a new product to the database
        console.log("create a product");
    };

    ProductFactory.updateProduct = (prodObj)=>{
        // saves changes to an existing product in the database
        console.log("update product");
    };


    return ProductFactory;

});