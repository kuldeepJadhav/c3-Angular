analyticsApp.controller('LandingController', ['$scope', 'salesService', 'reviewsService', 'navigationService', function($scope, salesService, reviewsService, navigationService) {



    var promise = salesService.getSalesDataForDealer();
    promise.then(function(data) {
        $scope.lineChartData = $scope.barData = data.salesData;
    }, function(err) {
        console.error('Error while fetching data ' + err);
    });

    $scope.xAxisFieldName = 'monthName';
    $scope.xAxisValueFieldName = 'sales';
    $scope.xAxisFieldNameForLineChart = 'monthName';
    $scope.xAxisValueFieldNameForLineChart = 'sales';

    var promise = reviewsService.getReviewDataForDealer();
    promise.then(function(data) {
        if (data && data.reviewData && data.reviewData.length > 0) {
            var reviewStats = angular.copy(data.reviewData);
            $scope.donutChartData = $scope.pieChartData = reviewStats;
            //$scope.donutChartData = reviewStats.slice(reviewStats.length-1, 1);
        }

    }, function(err) {
        console.error('Error while fetching data ' + err);
    });



    $scope.goToBarChartDetails = function() {
        navigationService.goToBarChartDetails();
    };

    $scope.goToLineChartDetails = function() {
        navigationService.goToLineChartDetails();
    };

    $scope.totalItems = 60;
    $scope.currentPage = 1;
    $scope.maxSize = 5;

    function getDetailedSalesData () {
        var promise = salesService.getDetailedSalesDataForDealer($scope.currentPage, 3);
        promise.then(function(data) {
            angular.forEach(data.salesData, function(value, index) {
                value.monthName = value.monthName + '#' + $scope.currentPage
            })
            $scope.tableData = data.salesData;
        }, function(err) {
            console.error('Error while fetching data ' + err);
        });

    };

    getDetailedSalesData();


    $scope.pageChanged = function() {
        getDetailedSalesData();
    };

}]);
