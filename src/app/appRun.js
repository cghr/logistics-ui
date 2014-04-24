angular.module('myApp')
    .run(function ($rootScope, AppDefaultConfig, $state, $stateParams, $http, $q, SchemaFactory) {

        $rootScope.serviceBaseUrl = AppDefaultConfig.serviceBaseUrl;

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        //Todo all the states with forms
        var states = [
            'hc.visitDetail.basicInf',
            'hc.ffqDetail.bev',
            'hc.memberDetail.fmh',
            'hc.memberDetail.pmh',
            'hc.memberDetail.ta',
            'enum.memberDetail.basicInf',
            'hc.ffqDetail.raw',
            'hc.ffqDetail.spicemix',
            'hc.ffqDetail.sweets',
            'hc.memberDetail.basicInf',
            'hc.memberDetail.pa',
            'hc.memberDetail.bp1',
            'hc.ffqDetail.snacks',
            'enum.hospDetail.basicInf',
            'hc.ffqDetail.nonveg',
            'hc.ffqDetail.foodAdditives',
            'enum.deathDetail.basicInf',
            'enum.householdDetail.basicInf',
            'hc.ffqDetail.cls',
            'enum.householdDetail.foodItems',
            'enum.houseDetail.basicInf',
            'enum.householdDetail.commonQs',
            'hc.ffqDetail.fruits',
            'hc.ffqDetail.pls',
            'hc.ffqDetail.juice',
            'hc.memberDetail.bp2',
            'enum.visitDetail.basicInf',
            'hc.ffqDetail.veg',
            'hc.ffqDetail.general',
            'enum.householdDetail.hospInf',
            'enum.householdDetail.deathInf',
            'resamp.memberDetail.basicInf'
        ];
        var promises = [];

        /* Construct Promises for states which have forms */
        angular.forEach(states, function (state) {
            promises.push($http.get('assets/jsonSchema/' + state+'.json'));
        });

        /* Fire XHR requests and store schemas in JsonSchema Object */
        $q.all(promises).then(function (responses) {
            var i = 0;
            angular.forEach(responses, function (response) {
                SchemaFactory.put(states[i], response.data);
                i++;
            });
        });


    });
