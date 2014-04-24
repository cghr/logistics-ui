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

                angular.forEach(StateTransitions, function (transition) {
                    if ($state.current.name === transition.from) {
                        $state.go(transition.to,$stateParams);
                        return;
                    }
                });
            });
        };
        //Handle Hospitalization Inf
        $scope.hospInf=function(data){
            if(data.hospStatus=='Yes'){
                $state.go('enum.householdDetail.hosp',$stateParams);
                $rootScope.hosp=data;

            }
            else{
                $state.go('enum.householdDetail.deathInf',$stateParams);
            }
        };

        //Handle Death Inf
        $scope.deathInf= function (data) {

            if(data.deathStatus=='Yes'){
                $state.go('enum.householdDetail.death',$stateParams);
                $rootScope.death=data;

            }
            else{
                $state.go('enum.houseDetail.household',$stateParams);
            }

        };
        $rootScope.death={deathStatus:'Yes',deathCount:3};
        $rootScope.hosp={hospStatus:'Yes',hospCount:3};



    });
