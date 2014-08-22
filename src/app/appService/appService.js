angular.module('appService', ['toaster'])
    .service('AppService', function ($http, toaster, $location) {

        this.cleanup = function () {


            return $http.get('api/data/cleanup')

                .success(function () {
                    toaster.pop('success', '', 'Cleaned up Successfully')
                })
                .error(function () {
                    toaster.pop('error', '', 'Failed to cleanup')
                })
        }

    })
