// service for communicate app and api

movieApp.service('movieService', function($q, $http) {
	this.getMovieByTitle = function(title) {
		movieTitle = title;
		var url = "http://mymovieapi.com/?title="+ movieTitle +"&type=json&plot=full&limit=10&year=0&yg=0&mt=none&lang=en-US&offset=&aka=full&release=full&business=01&tech=1"
		//var url = "http://www.omdbapi.com/?i=" + movieID;
		var deferred = $q.defer();
		$http.get(url).then(function(response) {
        		deferred.resolve(response.data);
        		//console.log(response.data)
        		//return (response.data);
        		//console.log(deferred.promise)
    		});
    		return deferred.promise;
	}
	this.getMovieById = function(id) {
		movieID = id;
		var url = "http://mymovieapi.com/?id=" + movieID + "&type=json&plot=full&episode=1&lang=en-US&aka=full&release=full&business=01&tech=1"
		//var url = "http://www.omdbapi.com/?i=" + movieID;
		var deferred = $q.defer();
		$http.get(url).then(function(response) {
        		deferred.resolve(response.data);
        		console.log(response.data)
        		//return (response.data);
        		//console.log(deferred.promise)
    		});
    		return deferred.promise;
	}
})