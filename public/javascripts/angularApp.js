var app = angular.module('DealWebApp', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.ejs',
                controller  : 'mainController'
            })

             // route for the deal page
            .when('/deal', {
                templateUrl : 'pages/deal.ejs',
                controller  : 'dealController'
            })
            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.ejs',
                controller  : 'aboutController'
            })
            // route for the about page
            .when('/contact', {
                templateUrl : 'pages/contact.ejs',
                controller  : 'contactController'
            })
             // route for the deals page
            .when('/deals', {
                templateUrl : 'pages/deals.ejs',
                controller  : 'dealsController'
            })
.when('/login', {
        templateUrl : 'pages/login.ejs',
        controller  : 'loginController'
    })
.when('/register', {
        templateUrl : 'pages/register.ejs',
        controller  : 'registerController'
    });
    });


  
  


