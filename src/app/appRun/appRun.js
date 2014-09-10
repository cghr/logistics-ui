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
            'enum.visitDetail.basicInf',
            'enum.eslDetail.birthHistory',
            'enum.eslDetail.deliveryDetails',
            'enum.eslDetail.birthDetails',
            'enum.eslDetail.suckle',
            'enum.eslDetail.immunization',
            'enum.eslDetail.illness',
            'enum.eslDetail.vaccination',
            'enum.eslDetail.mother',
            'enum.eslDetail.medicalHistory',
            'enum.eslDetail.pregnancy',
            'enum.eslDetail.fever',
            'enum.eslDetail.cough',
            'enum.eslDetail.breathing',
            'enum.eslDetail.chestPain',
            'enum.eslDetail.diarrhoea',
            'enum.eslDetail.vomit',
            'enum.eslDetail.abdominal',
            'enum.eslDetail.headache',
            'enum.eslDetail.consciousness',
            'enum.eslDetail.urine',
            'enum.eslDetail.skin',
            'enum.eslDetail.weight',
            'enum.eslDetail.lumps',
            'enum.eslDetail.paralysis',
            'enum.eslDetail.swallow',
            'enum.eslDetail.bleed',
            'enum.eslDetail.injury',
            'enum.eslDetail.tobacco',
            'enum.eslDetail.hsu'
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
