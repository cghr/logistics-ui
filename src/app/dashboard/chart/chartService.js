angular.module('chartService', [])
    .service('ChartService', function ChartService($http, $log) {

        ChartService.totalProgress = []
        ChartService.pendingDownloads = []

        function getData(servicePath) {
            return $http.get(servicePath)
        }

        this.getPendingDownloads = function () {

            return getData('api/chart/pendingDownloads')
                .success(function (data) {
                    ChartService.pendingDownloads = data
                })
                .error(fail)
        }

        this.getTotalProgress = function () {

            return getData('api/chart/totalProgress')
                .success(function (data) {
                    ChartService.totalProgress = data
                })
                .error(fail)
        }


        function fail() {
            $log.error('Failed to load chart data')
        }


    });
