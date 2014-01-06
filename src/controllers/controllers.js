//Controllers

movieApp.controller("homeControler", function($scope, movieService){
	$scope.id = "tt1170358";
	$scope.title = "home";
	$scope.xhrData = {};
    $scope.data = {};
	$scope.movieData = function() {
		var data = movieService.getMovie($scope.id, $scope.title);
		data.then(function(data) {
			console.log(data)
			$scope.xhrData = data;
		})
		//console.log(data)
	};
	$scope.movieData();
});