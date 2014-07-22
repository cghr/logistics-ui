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
                        name: 'foodItems',
                        url: '/foodItems',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Food Items'
                    },
                    {
                        name: 'hospInf',
                        url: '/hospInf',
                        tpl: 'enum/hospInf.html',
                        title: 'Hospitalization Inf'
                    },
                    {
                        name: 'hosp',
                        url: '/hosp',
                        tpl: 'enum/hosp.html',
                        title: 'Hospitalization',
                        addNew: true
                    },
                    {
                        name: 'deathInf',
                        url: '/deathInf',
                        tpl: 'enum/deathInf.html',
                        title: 'Death Inf'
                    },
                    {
                        name: 'death',
                        url: '/death',
                        tpl: 'enum/death.html',
                        title: 'Deaths',
                        addNew: true
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
                name: 'hospDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/hosp/:memberId',
                tpl: 'tpls/pageDetail.html',
                title: '',
                prevState: {name: 'enum.householdDetail.hosp', title: 'Hospitalization'},
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