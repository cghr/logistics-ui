angular.module('myApp')
    .controller('AppController', function ($scope, $window, AppService) {

        $scope.cleanup = function () {

            var confirm = $window.confirm("Are you sure to cleanup ?")

            if (confirm)
                AppService.cleanup()
        }


    })
