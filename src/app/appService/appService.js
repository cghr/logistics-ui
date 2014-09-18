angular.module('appService', ['toaster'])
    .factory('AppService', function AppService($http, toaster, $location) {

        AppService.deathDetails = {}

        AppService.cleanup = function () {


            return $http.get('api/data/cleanup')

                .success(function () {
                    toaster.pop('success', '', 'Cleaned up Successfully')
                })
                .error(function () {
                    toaster.pop('error', '', 'Failed to cleanup')
                })
        }


        return AppService

    })
