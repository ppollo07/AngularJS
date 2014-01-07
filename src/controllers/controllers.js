//Controllers

movieApp.controller("homeControler", function($scope, movieService){
	//$scope.id = "tt1170358";
	//$scope.title = "life";
	//$scope.xhrData = {};
    	//$scope.data = {};
	$scope.getMovieByTitle = function() {
		var data = movieService.getMovieByTitle($scope.title);
		data.then(function(data) {
			console.log(data)
			$scope.movies = data;
		})
		//console.log(data)
	};
	$scope.getMovieById = function() {
		var data = movieService.getMovieById($scope.id);
		data.then(function(data) {
			console.log(data)
			$scope.movieid = data;
		})
		//console.log(data)
	};
	$scope.ng_change_title = function() {
		$scope.getMovieByTitle();	
	}
	$scope.ng_change_id = function() {
		$scope.getMovieById();	
	}
	//$scope.movieData();
});