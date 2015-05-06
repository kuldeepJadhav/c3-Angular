analyticsApp.controller('DonutChartController', ['$scope', '$timeout', function($scope, $timeout) {

    function generateGraph() {
         
        var chartConfig = {
            bindto: '.donut-chart-box',
            color: {
                pattern: ['#8CC152', 'white', 'white' ]
            },
            padding: {
                top: 20
            },
            data: {
                columns: $scope.data,
                type: 'donut'
            },
            donut: {
                title: "Positive Percentage"
            }
        };

        c3.generate(chartConfig);
        //  $timeout(function() {
        //     $scope.showData = true;
        // }, 500);
    }


    $timeout(generateGraph, 1000);
}]);
