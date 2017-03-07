"use strict";

// provides getApiRoot() method which returns the API root so that ajax calls may be made based off that root
app.factory("RootFactory", [
  "$http",
  "apiUrl",
  ($http, apiUrl) => {
    const httpGet = $http.get(apiUrl);

    return {
      getApiRoot () {
        return httpGet.then(res => res.data);
      }
    };
  }
]);