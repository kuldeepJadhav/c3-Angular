analyticsApp.directive('pieChart', [function() {

    return {

        restrict: "E",
        templateUrl: function() {
            return "views/pieChart.html";
        },
        link: function(scope, element, attrs) {
            scope.barElement = element.find('.pie-chart-box');
        },
        scope: {
            'data': '=',
            'title': '@'
        }

    };
}]);
