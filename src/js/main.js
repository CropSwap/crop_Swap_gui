/* IFFE
TODO: add var BASE_URL
TODO: add $routeProvider service
TODO: routing for each page
TODO: controller for each page
TODO: add UI as a dependency once installed
*/

//IFFE
;(function () {
  angular.module('cropswap', ['ngRoute'], function($routeProvider) {
    $routeProvider
      .when('/newact', {
        templateUrl: 'partials/newact.html',
        controller: function($http, $location) {
          var create = this;

          create.newact = { };

          newact.submit = function() {
            console.log("it works");
            $http.post()
          }
        },
        controllerAs: 'newact'
      })
  })

})(); // end of cropswap module
