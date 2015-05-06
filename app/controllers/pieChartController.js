analyticsApp.controller('PieChartController', ['$scope', '$timeout', function($scope, $timeout) {

    function generateGraph() {
         
        var chartConfig = {
            bindto: '.pie-chart-box',
            color: {
                pattern: ['#8CC152', '#CCD1D9', '#FFCE54']
            },
            padding: {
                top: 20
            },
            data: {
                columns: $scope.data,
                type: 'pie'
            }
        };

        c3.generate(chartConfig);
        //  $timeout(function() {
        //     $scope.showData = true;
        // }, 500);
    }
    $timeout(generateGraph, 1000);
}]);
