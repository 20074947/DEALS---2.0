var app = angular.module("DealWebApp");

function dealsController($scope, $http) { 
	// create a message to display in our view
	$scope.message = "Deals Page!";

	findAll();

	function findAll() {
		$http.get("/deals")
			.success(function (data) {
				$scope.deals = data;
				console.log(data);
			})
			.error(function (data) {
				console.log("Error: " + data);
			});
	}

	$scope.incrementUpvotes = function(id){
		$http.put("/deals/" + id + "/votes")
			.success(function (data) {
				console.log(data);
				findAll();
			})
			.error(function (data) {
				console.log("Error: " +  data);
			});
	};

	$scope.delete = function(id) {
		if (confirm("Are you sure you want to delete this Deal?")) {
			console.log("Deleting id : " + id);
			$http.delete("/deals/" + id)
				.success(function (data) {
					console.log(data);
					findAll();
				})
				.error(function (data) {
					console.log("Error: " + data);
				});
		}
	};
}

module.exports = dealsController;