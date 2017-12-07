var app = angular.module('DealWebApp');

app.controller('dealController', ['$scope','$location','$http', function($scope, $location, $http) {
    
    $scope.formData = {};

    $scope.message = 'Deal Page!';
    $scope.amount = 1000;
    $scope.info = 'Kids deal';
    $scope.options = [{ name: "Waterford", id: 0 }, { name: "Cork", id: 1 }, { name: "Dublin", id: 2 }, { name: "Carlow", id: 3 }, { name: "Galway", id: 4 }];
    $scope.formData.paymentOptions = $scope.options[0];

    //Rest our formData fields
    $scope.formData.paymenttype = 'Waterford';
    $scope.formData.amount = 1000;
    $scope.formData.upvotes = 0;
    $scope.formData.info = 'Kids deal';

    $scope.addDeal = function(){
        $scope.formData.paymenttype = $scope.formData.paymentOptions.name;
        $http.post('/deals', $scope.formData)
    .success(function(data) {
            $scope.deals = data;
$location.path('/deals');
            console.log(data);
        })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
  }

  ]);
