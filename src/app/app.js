angular.module("myApp", [
        'schemaLoader',
        'lodash',
        'chieffancypants.loadingBar',
        'ui.bootstrap',
        'dashboard',
        'sync',
        'cgForm',
        'cgGrid',
        'idService',
        'appService',
        'stateTransitions',
        'templates-app',
        'templates-common',
        'ui.router',
        'security',
        'report',
        'enum',
        'hc',
        'resamp',
        //'ngcamera',
        'toaster']
    )
    .config(function ($urlRouterProvider, $httpProvider) {

        var reqInterceptor = function () {
            return {
                'request': function (config) {
                    var url = config.url
                    if (url.indexOf("api/") !== -1)
                        config.url = 'http://localhost:8080/' + url
                    return config;
                }
            };

        }

        //$httpProvider.interceptors.push(reqInterceptor);
        $urlRouterProvider.otherwise('/enum/area')
    })