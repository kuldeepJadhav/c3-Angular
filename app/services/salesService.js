analyticsApp.service('salesService', ['$http', '$q', function($http, $q) {

    this.getSalesDataForDealer = function() {
        var deferred = $q.defer();
        $http.get('/app/mockData/sales.json').
        success(function(data) {
            deferred.resolve(data);
        }).
        error(function(err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };



    this.getDetailedSalesDataForDealer = function(pageIndex, pageSize) {
        var deferred = $q.defer();
        $http.get('/app/mockData/sales-pagination.json', {
            params: {
                pageIndex: pageIndex,
                pageSize: pageSize
            }
        }).
        success(function(data) {
            deferred.resolve(data);
        }).
        error(function(err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };

}]);
