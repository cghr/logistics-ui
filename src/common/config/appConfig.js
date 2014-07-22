angular.module('appConfig', ['lodash'])
    .factory('appConfig', function ($window, _) {

        var windowUrl = $window.location.href
        var env = _.contains(windowUrl, 'build') ? 'dev' : 'prod'

        var baseUrl = (env == 'prod') ? '' : 'http://localhost:8080/'

        return {serviceBaseUrl: baseUrl}
    })