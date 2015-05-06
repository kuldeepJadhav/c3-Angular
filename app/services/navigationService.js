analyticsApp.service('navigationService', ['$location', function(location) {

     this.goToBarChartDetails = function () {
        location.path('/barchartdetailspage');
    };

     this.goToLineChartDetails = function () {
        location.path('/linechartdetailspage');
    };


}]);
