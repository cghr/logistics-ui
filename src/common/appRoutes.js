//Todo add routing config json for modules
angular.module('appRoutes', [])
    .constant('enumRoutes', {
        name: 'enum',
        url: '/enum',
        tpl: 'enum/enum.tpl.html',
        children: [
            {
                name: 'area',
                url: '/area',
                tpl: 'tpls/dataGrid.tpl.html',
                title: 'Areas'

            },
            {
                name: 'areaDetail',
                url: '/area/:areaId',
                tpl: 'tpls/pageDetail.tpl.html',
                title: 'Houses',
                prevState: {name: 'enum.area', title: 'Areas'},
                children: [
                    {
                        name: 'house',
                        url: '/house',
                        tpl: 'tpls/dataGrid.tpl.html',
                        title: 'Houses',
                        addNew: true
                    }
                ]
            },
            {
                name: 'houseDetail',
                url: '/area/:areaId/house/:houseId',
                tpl: 'tpls/pageDetail.tpl.html',
                title: 'Households',
                prevState: {name: 'enum.areaDetail.house', title: 'Houses'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Basic Inf'
                    },
                    {
                        name: 'household',
                        url: '/household',
                        tpl: 'tpls/dataGrid.tpl.html',
                        title: 'Households',
                        addNew: true
                    }
                ]
            },
            {
                name: 'householdDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId',
                tpl: 'tpls/pageDetail.tpl.html',
                defaultState: 'member',
                title: 'Members',
                prevState: {name: 'enum.houseDetail.household', title: 'Households'},
                children: [
                    {
                        name: 'visit',
                        url: '/visit',
                        tpl: 'tpls/dataGrid.tpl.html',
                        title: 'Visits',
                        addNew: true
                    },
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Basic Information'
                    },
                    {
                        name: 'member',
                        url: '/member',
                        tpl: 'tpls/dataGrid.tpl.html',
                        title: 'Members',
                        addNew: true
                    },
                    {
                        name: 'commonQs',
                        url: '/commonQs',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Common Qs'
                    },
                    {
                        name: 'foodItems',
                        url: '/foodItems',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Food Items'
                    },
                    {
                        name:'hospInf',
                        url:'/hospInf',
                        tpl:'enum/hospInf.tpl.html',
                        title:'Hospitalization Inf'
                    },
                    {
                        name: 'hosp',
                        url: '/hosp',
                        tpl: 'enum/hosp.tpl.html',
                        title: 'Hospitalization',
                        addNew: true
                    },
                    {
                        name:'deathInf',
                        url:'/deathInf',
                        tpl:'enum/deathInf.tpl.html',
                        title:'Death Inf'
                    },
                    {
                        name: 'death',
                        url: '/death',
                        tpl: 'enum/death.tpl.html',
                        title: 'Deaths',
                        addNew: true
                    }
                ]
            },
            {
                name: 'visitDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/visit/',
                tpl: 'tpls/pageDetail.tpl.html',
                title: '',
                prevState: {name: 'enum.householdDetail.visit', title: 'Visits'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Basic Inf'
                    }
                ]

            },
            {
                name: 'memberDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/member/:memberId',
                tpl: 'tpls/pageDetail.tpl.html',
                title: '',
                prevState: {name: 'enum.householdDetail.member', title: 'Members'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Basic Inf'
                    }
                ]

            },
            {
                name: 'hospDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/hosp/:memberId',
                tpl: 'tpls/pageDetail.tpl.html',
                title: '',
                prevState: {name: 'enum.householdDetail.hosp', title: 'Hospitalization'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Basic Inf'
                    }
                ]

            },
            {
                name: 'deathDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/death/:memberId',
                tpl: 'tpls/pageDetail.tpl.html',
                title: '',
                prevState: {name: 'enum.householdDetail.death', title: 'Deaths'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Basic Inf'
                    }
                ]

            }

        ]


    })
    .constant('hcRoutes', {
        name: 'hc',
        url: '/hc',
        tpl: 'hc/hc.tpl.html',
        children: [
            {
                name: 'area',
                url: '/area',
                tpl: 'tpls/dataGrid.tpl.html',
                title: 'Areas'

            },
            {
                name: 'areaDetail',
                url: '/area/:areaId',
                tpl: 'tpls/pageDetail.tpl.html',
                title: 'Area Detail',
                prevState: {name: 'hc.area', title: 'Areas'},
                children: [
                    {
                        name: 'house',
                        url: '/house',
                        tpl: 'tpls/dataGrid.tpl.html',
                        title: 'Houses'
                    }
                ]
            },
            {
                name: 'houseDetail',
                url: '/area/:areaId/house/:houseId',
                tpl: 'tpls/pageDetail.tpl.html',
                title: 'House Detail',
                prevState: {name: 'hc.areaDetail.house', title: 'Houses'},
                children: [
                    {
                        name: 'household',
                        url: '/household',
                        tpl: 'tpls/dataGrid.tpl.html',
                        title: 'Households'
                    }
                ]
            },
            {
                name: 'householdDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId',
                tpl: 'tpls/pageDetail.tpl.html',
                title: 'Household Detail',
                prevState: {name: 'hc.houseDetail.household', title: 'Households'},
                children: [
                    {
                        name: 'visit',
                        url: '/visit',
                        tpl: 'tpls/dataGrid.tpl.html',
                        title: 'Visits',
                        addNew: true

                    },
                    {
                        name: 'member',
                        url: '/member',
                        tpl: 'tpls/dataGrid.tpl.html',
                        title: 'Members'
                    },
                    {
                        name: 'ffq',
                        url: '/ffq',
                        tpl: 'tpls/dataGrid.tpl.html',
                        title: 'FFQ'
                    }

                ]
            },
            {
                name: 'visitDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/visit',
                tpl: 'tpls/pageDetail.tpl.html',
                title: '',
                prevState: {name: 'hc.householdDetail.visit', title: 'Visits'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Basic Inf'
                    }
                ]

            },
            {
                name: 'memberDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/member/:memberId',
                tpl: 'tpls/pageDetail.tpl.html',
                title: 'Member Detail',
                prevState: {name: 'hc.householdDetail.member', title: 'Members'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Basic Inf'
                    },
                    {
                        name: 'bp1',
                        url: '/bp1',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'BP1-General Information'
                    },
                    {
                        name: 'ta',
                        url: '/ta',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Tobacco & Alcohol'
                    },
                    {
                        name: 'pmh',
                        url: '/pmh',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Personal Medical History'
                    },
                    {
                        name: 'fmh',
                        url: '/fmh',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Family Medical History'
                    },
                    {
                        name: 'pa',
                        url: '/pa',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Physical Activities'
                    },
                    {
                        name: 'bp2',
                        url: '/bp2',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'BP2-Physical Measurements'
                    }

                ]
            },
            {
                name: 'ffqDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/ffq/:memberId',
                tpl: 'tpls/pageDetailNavDisabled.tpl.html',
                title: 'FFQ Detail',
                prevState: {name: 'hc.householdDetail.ffq', title: 'FFQ'},
                children: [
                    {
                        name: 'general',
                        url: '/general',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'General Information'
                    },
                    {
                        name: 'bev',
                        url: '/bev',
                        tpl: 'tpls/ffqForm.tpl.html',
                        title: 'Beverages'
                    },
                    {
                        name: 'cls',
                        url: '/cls',
                        tpl: 'tpls/ffqForm.tpl.html',
                        title: 'Cereals'
                    },
                    {
                        name: 'pls',
                        url: '/pls',
                        tpl: 'tpls/ffqForm.tpl.html',
                        title: 'Pulses'
                    },
                    {
                        name: 'veg',
                        url: '/veg',
                        tpl: 'tpls/ffqForm.tpl.html',
                        title: 'Vegetarian'
                    },
                    {
                        name: 'raw',
                        url: '/raw',
                        tpl: 'tpls/ffqForm.tpl.html',
                        title: 'RAW'
                    },
                    {
                        name: 'fruits',
                        url: '/fruits',
                        tpl: 'tpls/ffqForm.tpl.html',
                        title: 'Fruits'
                    },
                    {
                        name: 'juice',
                        url: '/juice',
                        tpl: 'tpls/ffqForm.tpl.html',
                        title: 'Juice'
                    },
                    {
                        name: 'nonveg',
                        url: '/nonveg',
                        tpl: 'tpls/ffqForm.tpl.html',
                        title: 'Non-Veg'
                    },
                    {
                        name: 'sweets',
                        url: '/sweets',
                        tpl: 'tpls/ffqForm.tpl.html',
                        title: 'Sweets'
                    },
                    {
                        name: 'spicemix',
                        url: '/spicemix',
                        tpl: 'tpls/ffqForm.tpl.html',
                        title: 'SpiceMix'
                    },
                    {
                        name: 'snacks',
                        url: '/snacks',
                        tpl: 'tpls/ffqForm.tpl.html',
                        title: 'Snacks'
                    },
                    {
                        name: 'foodAdditives',
                        url: '/foodAdditives',
                        tpl: 'tpls/surveyForm.tpl.html',
                        title: 'Food Additives'
                    }
                ]
            }


        ]

    })
    .constant('resampRoutes', {
        name: 'resamp',
        url: '/resamp',
        tpl: 'resamp/resamp.tpl.html',
        children: [
            {
                name: 'area',
                url: '/area',
                tpl: 'tpls/dataGrid.tpl.html',
                title: 'Areas'

            },
            {
                name: 'areaDetail',
                url: '/area/:areaId',
                tpl: 'tpls/pageDetail.tpl.html',
                title: 'Area Detail',
                prevState: {name: 'resamp.area', title: 'Areas'},
                children: [
                    {
                        name: 'house',
                        url: '/house',
                        tpl: 'tpls/dataGrid.tpl.html',
                        title: 'Houses'
                    }
                ]
            },
            {
                name: 'houseDetail',
                url: '/area/:areaId/house/:houseId',
                tpl: 'tpls/pageDetail.tpl.html',
                title: 'House Detail',
                prevState: {name: 'resamp.areaDetail.house', title: 'Houses'},
                children: [
                    {
                        name: 'household',
                        url: '/household',
                        tpl: 'tpls/dataGrid.tpl.html',
                        title: 'Households'
                    }
                ]
            },
            {
                name: 'householdDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId',
                tpl: 'tpls/pageDetail.tpl.html',
                title: 'Household Detail',
                prevState: {name: 'resamp.houseDetail.household', title: 'Households'},
                children: [

                    {
                        name: 'member',
                        url: '/member',
                        tpl: 'tpls/dataGrid.tpl.html',
                        title: 'Members'
                    }

                ]
            },
            {
                name: 'memberDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/member/:memberId',
                tpl: 'tpls/pageDetail.tpl.html',
                title: 'Resampling ',
                prevState: {name: 'resamp.householdDetail.member', title: 'Members'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/resampling.tpl.html',
                        title: 'Basic Inf'
                    }]
            }
        ]});
