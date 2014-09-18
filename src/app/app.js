angular.module("myApp", [
        'field',
        'lab',
        'shipment',
        'schemaLoader',
        'lodash',
        'chieffancypants.loadingBar',
        'ui.bootstrap',
        'dashboard',
        'sync',
        'cgForm',
        'cgGrid',
        'appService',
        'stateTransitions',
        'templates-app',
        'templates-common',
        'ui.router',
        'security',
        'report',
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

        $httpProvider.interceptors.push(reqInterceptor);
        $urlRouterProvider.otherwise('/field/packing')
    })