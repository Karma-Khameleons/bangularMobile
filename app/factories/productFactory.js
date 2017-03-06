"use strict";

app.factory("productFactory", function($http, dbConf){
	let ProductFactory = {};

    ProductFactory.allProducts = ()=>{
        // retrieves all products from the database
        console.log("get all products");
        return new Promise((resolve, reject)=>{

            // $http.get(`${FBCreds.URL}/samples.json?orderBy="uid"&equalTo="${currentUser}`) 
            // .success((sampleCollection)=>{
            //     Object.keys(sampleCollection).forEach((key)=>{
            //         sampleCollection[key].id = key;
            //         samples.push(sampleCollection[key]);
            //     });
            //     resolve(samples);
            // })
            // .error((error)=>{
            //     reject(error);
            // });         



            $http.get(`http://localhost:8000/products`)
            .then((productsCollection)=>{
                // commented out because I don't think this will be necessary when using the API
                // Object.keys(productsCollection).forEach((key)=>{
                //     productsCollection[key].id = key;
                // });
                console.log("productsCollection", productsCollection);
                resolve(productsCollection);
            });




            // $http.get(`${dbConf.apiUrl}/products`)
            // .success((productsCollection)=>{
            //     // commented out because I don't think this will be necessary when using the API
            //     // Object.keys(productsCollection).forEach((key)=>{
            //     //     productsCollection[key].id = key;
            //     // });
            //     console.log("productsCollection", productsCollection);
            //     resolve(productsCollection);
            // })
            // .error((error)=>{
            //     reject(error);
            // });




        });
    };

    ProductFactory.getProduct = (pk)=>{
        // retrieves a specific product from the database, queried via the product's primary key
        console.log("get a single product");  
        return new Promise((resolve, reject)=>{
            // $http.get(`${dbConf.apiUrl}/products/`)
            $http.get(`${dbConf.apiUrl}/products/${pk}/`)
            .then((prod)=>{
                console.log("prod", prod);
                resolve(prod);
            });
        });
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