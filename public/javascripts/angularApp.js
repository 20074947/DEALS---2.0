    require('../../node_modules/bootstrap/dist/css/bootstrap.css' );
    require('../../node_modules/font-awesome/css/font-awesome.css' );
    require('../stylesheets/style.css');
    require('angular');
    require('angular-route');
    var app = angular.module('DealWebApp', ['ngRoute']);
    require('./controllers/index');

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


  
  


