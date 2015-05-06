analyticsApp.service('reviewsService', ['$http', '$q', function($http, $q) {

    this.getReviewDataForDealer = function() {
    	var deferred = $q.defer();
        $http.get('/app/mockData/reviews.json').
        success(function(data) {
           deferred.resolve(data);
        }).
        error(function(err) {
           deferred.reject(err);
        });
        return deferred.promise;
    };



}]);
