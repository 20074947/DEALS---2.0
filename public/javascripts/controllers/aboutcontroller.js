var app = angular.module('DealWebApp');

function aboutController($scope) {
    // create a message to display in our view
    $scope.message = 'About page will be available soon';
};

module.exports = aboutController;