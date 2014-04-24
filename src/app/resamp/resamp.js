angular.module('myApp.resamp', ['ui.router', 'routeConfigHandler', 'appRoutes'])
    .config(function ($stateProvider, resampRoutes, RouteConfigHandler) {

        $stateProvider.state(resampRoutes.name, {
            url: resampRoutes.url,
            templateUrl: resampRoutes.tpl
        });

        RouteConfigHandler.configureRoutesForChildren($stateProvider, resampRoutes.name, resampRoutes.children);

    });
