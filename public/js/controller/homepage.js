app.controller('HomeCtrl', function($scope, $http){
	
	$scope.result = '';
    $scope.options = { types: '(cities)' };
    $scope.details = '';

	$scope.submitSearch = function(){
		console.log($scope.result);
		console.log($scope.details.formatted_address);

		

	};

});