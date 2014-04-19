angular.module('myApp')
    .controller('AppController', function ($scope, $location, StateTransitions, $state, $stateParams, $rootScope, $log, AppService, $http, AppDefaultConfig, IDService) {

        //Generalised Add New Item Function
        $scope.addNew = function () {
            IDService.getNextID().then(function (data) {
                angular.forEach(StateTransitions, function (transition) {
                    if ($state.current.name === transition.from) {
                        $stateParams[transition.param] = data.id;
                        $state.go(transition.to,$stateParams);
                        return;
                    }
                });
            },function(fail){
                console.log('failed');
                console.log($state.current.name);

                angular.forEach(StateTransitions, function (transition) {
                    if ($state.current.name === transition.from) {
                        $state.go(transition.to,$stateParams);
                        return;
                    }
                });
            });
        };
        $scope.sync = function () {
            //$http.get("http://localhost:8080/hc-services/api/GridService/enum/area");

        };


    });
