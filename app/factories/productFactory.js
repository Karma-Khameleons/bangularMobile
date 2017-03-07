"use strict";

app.factory("productFactory", function($http, RootFactory){
    let ProductFactory = {};

    // let getRoot = ()=>{
    //     RootFactory.getApiRoot()
    //         .then((apiRoot) => {
    //             console.log("apiRoot: ", apiRoot);
    //             return apiRoot;
    //             // api = apiRoot;
    //         });
    // };


    ProductFactory.getAllProducts = ()=>{
        // retrieves all products from the database
        return new Promise((resolve, reject)=>{
            RootFactory.getApiRoot()
            .then((apiRoot)=>{
                console.log("apiRoot: ", apiRoot);
                $http({
                    url: `${apiRoot.products}`,
                    method: "GET"
                    // headers: {
                    //     "Content-Type": "application/x-www-form-urlencoded"
                    // }
                })
                .then(res => {
                    console.log("results:", res);
                    resolve(res.data);
                });
            });
        });

    };


    // ProductFactory.getAllProducts = ()=>{
    //     // retrieves all products from the database
    //     return new Promise((resolve, reject)=>{
    //         RootFactory.getApiRoot()
    //             .then(
    //                 root => 
    //                     console.log("root: ", root);
    //                     $http.get(`${root.products}`)
    //                         .then(
    //                             res => resolve(res.data.results)
    //                             // res => $scope.product_types = res.data.results,
    //                             // err => console.log
    //                         )
    //                 // ,err => console.log
    //             );
    //         // api = getRoot();
    //         // console.log("api", api);
    //         // $http.get(`${api.products}.json`)
    //         // .then((responseObject)=>{
    //         //     let productsCollection = responseObject.data;
    //         //     resolve(productsCollection);
    //         // });
    //     });
    // };

    // ProductFactory.getProduct = (pk)=>{
    //     // retrieves a specific product from the database, queried via the product's primary key
    //     return new Promise((resolve, reject)=>{
    //         $http.get(`${api}/products/${pk}.json`)
    //         .then((responseObject)=>{
    //             let product = responseObject.data;
    //             resolve(product);
    //         });
    //     });
    // };

    // ProductFactory.createProduct = (newProduct)=>{
    //     // saves a new product to the database
    //     console.log("create a product");

        // $http({
        //     url: `${api}/create_product.json`,
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     data: newProduct
        // })
        // .then(res => {
        //     console.log("results:", res);
        // });
    // };



    // ProductFactory.updateProduct = (updatedProduct)=>{
    //     // saves changes to an existing product in the database
    //     // accepts a product object and uses its pk attribute to target the updated product in the database
    //     console.log("update product");

    //     $http({
    //         url: `${api}/products/${updatedProduct.pk}.json`,
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded"
    //         },
    //         data: updatedProduct
    //     })
    //     .then(res => {
    //         console.log("results:", res);
    //     });



    // };
    return ProductFactory;
});