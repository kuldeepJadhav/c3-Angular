analyticsApp.directive('lineChart', [function() {

    return {

        restrict: "E",
        templateUrl: function() {
            return "views/lineChart.html";
        },
        link: function(scope, element, attrs) {
            scope.barElement = element.find('.line-chart-box');
        },
        scope: {
            'data': '=',
            'field': '@',
            'value': '@',
            'title': '@'
        }

    };
}]);
