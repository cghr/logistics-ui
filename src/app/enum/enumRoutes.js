angular.module('enumRoutes', [])
    .constant('enumRoutes', {
        name: 'enum',
        url: '/enum',
        tpl: 'enum/enum.html',
        children: [
            {
                name: 'area',
                url: '/area',
                tpl: 'tpls/dataGrid.html',
                title: 'Areas'

            },
            {
                name: 'areaDetail',
                url: '/area/:areaId',
                tpl: 'tpls/pageDetail.html',
                title: 'Houses',
                prevState: {name: 'enum.area', title: 'Areas'},
                children: [
                    {
                        name: 'house',
                        url: '/house',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Houses',
                        addNew: true
                    }
                ]
            },
            {
                name: 'houseDetail',
                url: '/area/:areaId/house/:houseId',
                tpl: 'tpls/pageDetail.html',
                title: 'Households',
                prevState: {name: 'enum.areaDetail.house', title: 'Houses'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Basic Inf'
                    },
                    {
                        name: 'household',
                        url: '/household',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Households',
                        addNew: true
                    }
                ]
            },
            {
                name: 'householdDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId',
                tpl: 'tpls/pageDetail.html',
                defaultState: 'member',
                title: 'Members',
                prevState: {name: 'enum.houseDetail.household', title: 'Households'},
                children: [
                    {
                        name: 'visit',
                        url: '/visit',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Visits',
                        addNew: true
                    },
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Basic Information'
                    },
                    {
                        name: 'respondent',
                        url: '/respondent',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Respondent'
                    },
                    {
                        name: 'member',
                        url: '/member',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Members',
                        addNew: true
                    },
                    {
                        name: 'commonQs',
                        url: '/commonQs',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Common Qs'
                    },
                    {
                        name: 'deathInf',
                        url: '/deathInf',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Death Inf'
                    },
                    {
                        name: 'death',
                        url: '/death',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Deaths',
                        addNew: true
                    },
                    {
                        name: 'esl',
                        url: '/esl',
                        tpl: 'tpls/dataGrid.html',
                        title: 'ESL',
                        addNew: false
                    }
                ]
            },
            {
                name: 'visitDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/visit/',
                tpl: 'tpls/pageDetail.html',
                title: '',
                prevState: {name: 'enum.householdDetail.visit', title: 'Visits'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Basic Inf'
                    }
                ]

            },
            {
                name: 'eslDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/esl/:deathId',
                tpl: 'enum/esl/esl.html',
                title: '',
                prevState: {name: 'enum.householdDetail.esl', title: 'ESL'},
                children: [
                    {
                        name: 'birthHistory',
                        url: '/birthHistory',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Birth History'
                    },
                    {
                        name: 'deliveryDetails',
                        url: '/deliveryDetails',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Delivery Details'
                    },
                    {
                        name: 'birthDetails',
                        url: '/birthDetails',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Birth Details'
                    },
                    {
                        name: 'suckle',
                        url: '/suckle',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Suckle'
                    },
                    {
                        name: 'immunization',
                        url: '/immunization',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Immunization'
                    },
                    {
                        name: 'illness',
                        url: '/illness',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Illness'
                    },
                    {
                        name: 'vaccination',
                        url: '/vaccination',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Vaccination'
                    },
                    {
                        name: 'mother',
                        url: '/mother',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Mother'
                    },
                    {
                        name: 'medicalHistory',
                        url: '/medicalHistory',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Medical History'
                    },
                    {
                        name: 'pregnancy',
                        url: '/pregnancy',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Pregnancy'
                    },
                    {
                        name: 'fever',
                        url: '/fever',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Fever'
                    },
                    {
                        name: 'cough',
                        url: '/cough',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Cough'
                    },
                    {
                        name: 'breathing',
                        url: '/breathing',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Breathing'
                    },
                    {
                        name: 'chestPain',
                        url: '/chestPain',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Chest Pain'
                    },
                    {
                        name: 'diarrhoea',
                        url: '/diarrhoea',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Diarrhoea'
                    },
                    {
                        name: 'vomit',
                        url: '/vomit',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Vomit'
                    },
                    {
                        name: 'abdominal',
                        url: '/abdominal',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Abdominal'
                    },
                    {
                        name: 'headache',
                        url: '/headache',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Headache'
                    },
                    {
                        name: 'consciousness',
                        url: '/consciousness',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Consciousness'
                    },
                    {
                        name: 'urine',
                        url: '/urine',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Urine'
                    },
                    {
                        name: 'skin',
                        url: '/skin',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Skin'
                    },
                    {
                        name: 'weight',
                        url: '/weight',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Weight'
                    },
                    {
                        name: 'lumps',
                        url: '/lumps',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Lumps'
                    },
                    {
                        name: 'paralysis',
                        url: '/paralysis',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Paralysis'
                    },
                    {
                        name: 'swallow',
                        url: '/swallow',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Swallow'
                    },
                    {
                        name: 'bleed',
                        url: '/bleed',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Bleed'
                    },
                    {
                        name: 'injury',
                        url: '/injury',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'injury'
                    },
                    {
                        name: 'tobacco',
                        url: '/tobacco',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Tobacco'
                    },
                    {
                        name: 'hsu',
                        url: '/hsu',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Health Service Utilization'
                    }

                ]

            },
            {
                name: 'memberDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/member/:memberId',
                tpl: 'tpls/pageDetail.html',
                title: '',
                prevState: {name: 'enum.householdDetail.member', title: 'Members'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Basic Inf'
                    }
                ]

            },
            {
                name: 'deathDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/death/:memberId',
                tpl: 'tpls/pageDetail.html',
                title: '',
                prevState: {name: 'enum.householdDetail.death', title: 'Deaths'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Basic Inf'
                    }
                ]

            }

        ]


    });