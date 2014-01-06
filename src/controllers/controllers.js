//Controllers

movieApp.controller("homeControler", function($scope, movieService){
	$scope.id = "tt1170358";
	$scope.movieData = function() {
		var data = movieService.getMovie($scope.id);
		//console.log(data)
	};
	$scope.movieData($scope.id)
});