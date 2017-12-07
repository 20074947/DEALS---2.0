var app = angular.module('DealWebApp', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'public/pages/home.ejs',
                controller  : 'mainController'
            })

             // route for the deal page
            .when('/deal', {
                templateUrl : 'public/pages/deal.ejs',
                controller  : 'dealController'
            })
            // route for the about page
            .when('/about', {
                templateUrl : 'public/pages/about.ejs',
                controller  : 'aboutController'
            })
            // route for the about page
            .when('/contact', {
                templateUrl : 'public/pages/contact.ejs',
                controller  : 'contactController'
            })
             // route for the deals page
            .when('/deals', {
                templateUrl : 'public/pages/deals.ejs',
                controller  : 'dealsController'
            })
.when('/login', {
        templateUrl : 'public/pages/login.ejs',
        controller  : 'loginController'
    })
.when('/register', {
        templateUrl : 'public/pages/register.ejs',
        controller  : 'registerController'
    });
    });


  
  


