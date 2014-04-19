angular.module('myApp.enum', ['ui.router', 'routeConfigHandler', 'appRoutes'])
    .config(function ($stateProvider, enumRoutes, RouteConfigHandler) {

        $stateProvider.state(enumRoutes.name, {
            url: enumRoutes.url,
            templateUrl: enumRoutes.tpl
        });

        RouteConfigHandler.configureRoutesForChildren($stateProvider, enumRoutes.name, enumRoutes.children);

    });
