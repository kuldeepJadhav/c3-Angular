analyticsApp.directive('barChart', [function() {

    return {

        restrict: "E",
        templateUrl: function() {
            return "views/barChart.html";
        },
        link: function(scope, element, attrs) {
            scope.barElement = element.find('.bar-chart-box');
        },
        scope: {
            'data': '=',
            'field': '@',
            'value': '@',
            'title': '@'
        }

    };
}]);
