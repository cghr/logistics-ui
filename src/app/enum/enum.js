angular.module('enum', ['ui.router', 'routeConfigHandler', 'enumRoutes', 'cgGrid', 'toaster', 'idService', 'stateTransitions'])
    .config(function ($stateProvider, enumRoutes, RouteConfigHandler) {

        $stateProvider
            .state(enumRoutes.name, {
                url: enumRoutes.url,
                templateUrl: enumRoutes.tpl
            });

        RouteConfigHandler.configureRoutesForChildren($stateProvider, enumRoutes.name, enumRoutes.children)

    })
    .controller('EnumCtrl', function ($scope, GridFactory, $rootScope, $state, $stateParams, StateTransitions, IDService) {

        $scope.addNew = function () {

            IDService.getNextID.then(done, fail)

            function done() {
                transitionState($state.current.name, IDService.nextID)
            }

            function fail() {
                transitionState($state.current.name, undefined)
            }

            function transitionState(currentState, nextID) {

                var stateObject = StateTransitions[currentState]
                if (nextID)
                    $stateParams[stateObject.param] = nextID

                $state.go(stateObject.to, $stateParams)

            }
        };

        $scope.hospInf = function (data) {

            var nextState = (data.hospStatus == 'Yes') ? 'enum.householdDetail.hosp' : 'enum.householdDetail.deathInf'
            $state.go(nextState, $stateParams)
            $rootScope.hosp = data

        }

        $scope.deathInf = function (data) {

            var nextState = (data.deathStatus == 'Yes') ? 'enum.householdDetail.death' : 'enum.houseDetail.household'
            $state.go(nextState, $stateParams)
            $rootScope.death = data

        }

    })
