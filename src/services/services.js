// service for communicate app and api

movieApp.service('movieService', function($q, $http) {
	this.getMovie = function(id) {
		movieID = id;
		var url = "http://www.omdbapi.com/?i=" + movieID;
		var deferred = $q.defer();
		$http.get(url).then(function(response) {
        		deferred.resolve(response.data);
        		//console.log(response.data)
        		//return (response.data);
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