angular.module('authDefaultConfig', [])
    .factory('AuthDefaultConfig', function($rootScope) {

        return {
            getConfig: function() {
                return {
                    authUrl: $rootScope.serviceBaseUrl + 'api/security/auth',
                    registerUrl: $rootScope.serviceBaseUrl + 'api/user',
                    logoutUrl: $rootScope.serviceBaseUrl + 'api/security/logout'
                };
            }
        };
    });