/* IFFE
TODO: add var BASE_URL
TODO: add $routeProvider service
TODO: routing for each page
TODO: controller for each page
TODO: add UI as a dependency once installed
*/

//IFFE
;(function () {
  var BASE_URL = "http://cropswap.herokuapp.com/";

  angular.module('cropswap', ['ngRoute'], function($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/signup'
      })
      .when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: function($http, $location) {
          var signup = this;

          signup.user = {

          };

          signup.signupUser = function () {
            console.log('it works!');
            $http.post("http://cropswap.herokuapp.com/users.json", signup.user)
              .then(function() {
                console.log('it works');
                $location.path('/newact')
              });
          };
        },
        controllerAs: 'signup'
      })
  })

})(); // end of cropswap module
