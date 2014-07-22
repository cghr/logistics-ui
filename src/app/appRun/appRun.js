angular.module('myApp')
    .run(function ($rootScope, $state, $stateParams, SchemaFactory, _, SchemaLoader) {

        $rootScope.$state = $state
        $rootScope.$stateParams = $stateParams

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
            'hc.ffqDetail.salt',
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
            'resamp.memberDetail.basicInf',
            'hc.ffqDetail.invitationCard'
        ];

        SchemaLoader
            .loadAllSchemas(states, 'assets/jsonSchema/')
            .then(function () {
                _.each(SchemaLoader.allSchemas, function (schema, index) {
                    SchemaFactory.put(states[index], schema)
                })

            })

    })
