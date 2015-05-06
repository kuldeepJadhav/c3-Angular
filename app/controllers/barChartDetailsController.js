analyticsApp.controller('BarChartDetailsController', ['$scope', 'salesService', 'reviewsService', '$location', function($scope, salesService, reviewsService, location) {

    var promise = salesService.getSalesDataForDealer();
    promise.then(function(data) {
        $scope.barData = data.salesData;
    }, function(err) {
        console.error('Error while fetching data ' + err);
    });

    $scope.xAxisFieldName = 'monthName';
    $scope.xAxisValueFieldName = 'sales';

    $scope.goToLandingPage = function() {
        location.path('/landingpage');
    };
}]);
