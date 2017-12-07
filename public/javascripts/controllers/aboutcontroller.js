var app = angular.module('DealWebApp');

app.controller('aboutController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'About page will be available soon';
}
]);