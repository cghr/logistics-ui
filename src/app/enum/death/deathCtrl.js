angular.module('death', ['cgGrid', 'ui.router'])
    .controller('deathCtrl', function ($scope, $state, $rootScope, GridFactory) {

        $scope.canAddMore = true

        GridFactory.getData().then(function () {

            var actualCount = (GridFactory.data).data.rows.length
            $scope.canAddMore = (actualCount === $rootScope.death.deathCount) ? false : true


        });


    })