angular.module('idService', [])
    .service('IDService', function IDService($http, $location, $log) {

        IDService.nextID = ''

        this.getNextID = function () {


            return $http.get('api/IDService' + $location.url())
                .success(function (data) {
                    IDService.nextID = data.id
                })
                .error(function () {
                    $log.error('Failed to getNextID')
                })

        }

    })
