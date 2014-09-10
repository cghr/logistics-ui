angular.module('enum', ['ui.router', 'routeConfigHandler', 'enumRoutes', 'cgGrid', 'toaster', 'idService', 'stateTransitions', 'death','esl'])
    .config(function ($stateProvider, enumRoutes, RouteConfigHandler) {

        $stateProvider
            .state(enumRoutes.name, {
                url: enumRoutes.url,
                templateUrl: enumRoutes.tpl,
                controller: 'EnumCtrl'
            });

        RouteConfigHandler.configureRoutesForChildren($stateProvider, enumRoutes.name, enumRoutes.children)

    })
