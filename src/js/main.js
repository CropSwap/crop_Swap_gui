/* IFFE
TODO: add $routeParams to each page that will need different params. set it equal to a variable
TODO: routing for each page
TODO: controller for each page
TODO: add UI as a dependency once installed
TODO: How do I pass a user_id for a user who has just signed up?
TODO: How do I capture the token with that associated user?
TODO:
*/


//IFFE
;(function () {


  angular.module('cropswap', ['ngRoute'],
    function($routeProvider) {
    $routeProvider
    .when('/', {
      redirectTo: '/signup'
    })
    .when('/signup', {
      templateUrl: 'partials/signup.html',
      controller: function($http, $scope, $location, User) {

        var signup = this;

        signup.user = {
            "name": "",
            "phone_number": "",
            "zip_code": "",
            "description": "",
            "email": "",
            "password": ""
        };

        signup.signupUser = function () {
          console.log('it works!');
          $http.post("https://cropswap.herokuapp.com/users/1.json", signup.user)
            .then(function(data) {

            // TODO: Update `User` with the data from the API...
            console.log(data);
            $location.path('/profile')
          });
        };
      },
      controllerAs: 'signup'
    })

/*    .when('/profile/edit', {
      templateUrl: 'partials/newact.html',
      controller: function($http, $location, User) {

        var newact = this;
        console.log(User);
        /*
        var user_id = $routeParams.id;
        var name = $routeParams.name;
        var phone_number = $routeParams.phone_number;
        var zip_code = $routeParams.zip_code;
        var description = $routeParams.description;


        newact.user = {
          name: "",
          phone_number: "",
          zip_code: "",
          description: ""
        };

        newact.newactuser = function () {
          console.log('its working');
          $http.patch(BASE_URL + 'users' + $routeParams.id, newact.user)
          .then(function() {
            $location.path('/postcrop')
          });
        };
      },
      controllerAs: 'newact'
    })
    */
    .when('/postcrop', {
      templateUrl: 'partials/postcrop.html',
      controller: function($http, $location, User) {

        // var id = $routeParams.id;
        var postcrop = this;

        postcrop.crop = {

        };
        postcrop.newcrop = function () {
          console.log('your posting a crop!');
          $http.post("http://cropswap.herokuapp.com/" + 'crops/', postcrop.newcrop)
            .then(function() {

          });
        };
      },
      controllerAs: 'postcrop'
    })
    .when('/profile', {
      templateUrl: 'partials/profile.html',
      controller: function($http, $rootScope, User) {
        // TODO: Inside of this "thenable"...?
        // TODO: WTF is response.data anyway?
        // TODO: profile.response = response.data
        // TODO: What's a better name than `profile.response`...?
        // TODO: Populate the user's information... how?


        $http.get('https://cropswap.herokuapp.com/users/1.json')
          .then(function(response) {
            $rootScope.profile = response.data;
            //console.log(profile.data);
         })
      },
      controllerAs: 'profile'
    })
    //  .otherwise({
    //    redirectTo: '/404.html',
    //    templateUrl: 'partials/404.html'
    //  });
  }) // END module(cropswap)

  .value('User', { })
})(); // End of IFFE
