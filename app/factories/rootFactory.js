"use strict";

app.factory("RootFactory", [
  "$http",
  "apiUrl",
  ($http, apiUrl) => {
    const httpGet = $http.get(apiUrl);

    return {
      getApiRoot () {
        return httpGet.then(res => res.data)
      }
    }
  }
]);