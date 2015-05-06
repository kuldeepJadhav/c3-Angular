analyticsApp.directive('donutChart', [function() {

    return {

        restrict: "E",
        templateUrl: function() {
            return "views/donutChart.html";
        },
        link: function(scope, element, attrs) {
            scope.barElement = element.find('.bar-chart-box');
        },
        scope: {
            'data': '=',
            'title': '@'
        }

    };
}]);
