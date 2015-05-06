analyticsApp.controller('LineChartDetailsController', ['$scope', 'salesService', 'reviewsService', '$location', function($scope, salesService, reviewsService, location) {

    var promise = salesService.getSalesDataForDealer();
    promise.then(function(data) {
        $scope.lineChartData = data.salesData;
    }, function(err) {
        console.error('Error while fetching data ' + err);
    });

    $scope.xAxisFieldNameForLineChart = 'monthName';
    $scope.xAxisValueFieldNameForLineChart = 'sales';

    $scope.goToLandingPage = function() {
        location.path('/landingpage');
    };
}]);
