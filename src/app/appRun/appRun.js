angular.module('myApp')
    .run(function ($rootScope, $state, $stateParams, SchemaFactory, _, SchemaLoader) {


        $rootScope.$state = $state
        $rootScope.$stateParams = $stateParams

        var states = [];

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
