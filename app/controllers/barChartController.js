analyticsApp.controller('BarChartController', ['$scope', '$timeout', function($scope, $timeout) {

    function generateGraph() {
        
        var chartConfig = {
            bindto: '.bar-chart-box',
            
            color: {
                pattern: ['#FFCE54']
            },
            padding: {
                top: 20
            },
            data: {
                json: $scope.data,
                keys: {
                    x: $scope.field,
                    value: [$scope.value]
                },
                type: 'bar'
            },
            axis: {
                x: {
                    type: 'category',
                    tick: {
                        width: 300
                    }
                }
            },
            bar: {
                width: {
                    ratio: 0.6 // this makes bar width 50% of length between ticks
                }
            },
            
            tooltip: {}
        };

        c3.generate(chartConfig);
        // $timeout(function() {
        //     $scope.showData = true;
        // }, 500);
    }


    $timeout(generateGraph, 1000);
}]);
