angular.module('myApp')
    .run(function ($rootScope, $state, $stateParams, SchemaFactory, _, SchemaLoader) {


        $rootScope.$state = $state
        $rootScope.$stateParams = $stateParams

        var states = [
            'enum.houseDetail.basicInf',
            'enum.deathDetail.basicInf',
            'enum.householdDetail.basicInf',
            'enum.householdDetail.commonQs',
            'enum.householdDetail.deathInf',
            'enum.householdDetail.respondent',
            'enum.memberDetail.basicInf',
            'enum.visitDetail.basicInf'
        ];

        SchemaLoader
            .loadAllSchemas(states, 'assets/jsonSchema/')
            .then(function () {
                _.each(SchemaLoader.allSchemas, function (schema, index) {
                    SchemaFactory.put(states[index], schema)
                })

            }, function (err) {
                console.log('Error loading schemas')
                console.log(err)
            })

    })
