angular.module('myApp.enum', ['ui.router', 'routeConfigHandler', 'appRoutes','cgGrid','toaster'])
    .config(function ($stateProvider, enumRoutes, RouteConfigHandler) {

        $stateProvider.state(enumRoutes.name, {
            url: enumRoutes.url,
            templateUrl: enumRoutes.tpl
        });

        RouteConfigHandler.configureRoutesForChildren($stateProvider, enumRoutes.name, enumRoutes.children);

    })
    .controller('HospCtrl', function ($scope,GridService,$rootScope,toaster) {

        $scope.canAddMore=true;
        GridService.getData().then(function (resp) {
            var count=resp.data.data.rows.length;
            $scope.canAddMore=(count==$rootScope.hosp.hospCount)?false:true;


        });

    })
    .controller('DeathCtrl', function ($scope,GridService,$rootScope) {

        $scope.canAddMore=true;
        GridService.getData().then(function (resp) {
            var count=resp.data.data.rows.length;
            $scope.canAddMore=(count==$rootScope.death.deathCount)?false:true;

        });

    });
