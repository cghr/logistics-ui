angular.module('dashboard', ['ui.router', 'angularCharts', 'lodash', 'chartService'])
    .config(function ($stateProvider) {

        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.html',
            controller: 'dashboardCtrl',
            controllerAs: 'dashboard'
        })

    })
    .controller('dashboardCtrl', function (ChartService, $interval) {

        var vm = this
        vm.chartType = 'bar'

        vm.pendingDownloadsConfig = getChartConfig('Pending Downloads')
        vm.totalProgressConfig = getChartConfig('Total Progress')

        updateDashboard()

        $interval(function () {
            updateDashboard()
        }, 5000)

        function updateDashboard() {

            ChartService.getPendingDownloads()
                .then(function () {
                    vm.pendingDownloads = ChartService.pendingDownloads
                })
            ChartService.getTotalProgress()
                .then(function () {
                    vm.totalProgress = ChartService.totalProgress
                })
        }

        function getChartConfig(title) {

            return { "labels": false, "title": title,
                "legend": { "display": true, "position": "right" },
                "innerRadius": 0,
                "lineLegend": "lineEnd"
            };
        }


    })
