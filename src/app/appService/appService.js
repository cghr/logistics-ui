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
        AppService.getDeathDetails = function (deathId) {

            return $http.get('api/data/dataAccessService/death/deathId/' + deathId)
                .success(function (resp) {
                    AppService.deathDetails = resp

                })
                .error(function () {
                    toaster.pop('error', '', 'Failed to fetch death information')
                })

        }


        return AppService

    })
