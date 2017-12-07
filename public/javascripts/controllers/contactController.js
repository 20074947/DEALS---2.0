var app = angular.module('DealWebApp');

app.controller('contactController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'Contact page will be available soon';
}
]);