angular.module("myApp", [
        'chieffancypants.loadingBar',
        'ui.bootstrap',
        'cgForm',
        'cgGrid',
        'appDefaultConfig',
        'appRoutes',
        'idService',
        'appService',
        'stateTransitions',
        'templates-app',
        'templates-common',
        'ui.router.state',
        'ui.router',
        'myApp.security',
        'myApp.report',
        'myApp.enum',
        'myApp.hc'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {

        //Todo add default landing page
        $urlRouterProvider.otherwise('/enum/area');

    });