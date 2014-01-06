// service for communicate app and api

movieApp.service('movieService', function($q, $http) {
	this.getMovie = function(id) {
		movieID = id;
		var deferred = $q.defer();
		$http.get("http://www.omdbapi.com/?i=" + movieID).then(function(response) {
        		deferred.resolve(response.data);
        		//console.log(response.data)
        		//console.log(deferred.promise)
    		});
    		return deferred.promise;
		/*
		$http('GET', "http://www.omdbapi.com/?i=tt1170358", function(status, response){
			// success
		}, function(status, response){
			// error
		});
		*/
	}
})