angular.module('myApp.hc', ['ui.router', 'routeConfigHandler', 'appRoutes'])
    .config(function ($stateProvider, hcRoutes, RouteConfigHandler) {

        $stateProvider.state(hcRoutes.name, {
            url: hcRoutes.url,
            templateUrl: hcRoutes.tpl
        });

        RouteConfigHandler.configureRoutesForChildren($stateProvider, hcRoutes.name, hcRoutes.children);

    });
