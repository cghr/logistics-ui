angular.module('hcRoutes', [])
    .constant('hcRoutes', {
        name: 'hc',
        url: '/hc',
        tpl: 'hc/hc.html',
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
                title: 'Area Detail',
                prevState: {name: 'hc.area', title: 'Areas'},
                children: [
                    {
                        name: 'house',
                        url: '/house',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Houses'
                    }
                ]
            },
            {
                name: 'houseDetail',
                url: '/area/:areaId/house/:houseId',
                tpl: 'tpls/pageDetail.html',
                title: 'House Detail',
                prevState: {name: 'hc.areaDetail.house', title: 'Houses'},
                children: [
                    {
                        name: 'household',
                        url: '/household',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Households'
                    }
                ]
            },
            {
                name: 'householdDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId',
                tpl: 'tpls/pageDetail.html',
                title: 'Household Detail',
                prevState: {name: 'hc.houseDetail.household', title: 'Households'},
                children: [
                    {
                        name: 'visit',
                        url: '/visit',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Visits',
                        addNew: true

                    },
                    {
                        name: 'member',
                        url: '/member',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Members'
                    },
                    {
                        name: 'ffq',
                        url: '/ffq',
                        tpl: 'tpls/dataGrid.html',
                        title: 'FFQ'
                    }

                ]
            },
            {
                name: 'visitDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/visit',
                tpl: 'tpls/pageDetail.html',
                title: '',
                prevState: {name: 'hc.householdDetail.visit', title: 'Visits'},
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
                title: 'Member Detail',
                prevState: {name: 'hc.householdDetail.member', title: 'Members'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Basic Inf'
                    },
                    {
                        name: 'bp1',
                        url: '/bp1',
                        tpl: 'tpls/surveyForm.html',
                        title: 'BP1-General Information'
                    },
                    {
                        name: 'ta',
                        url: '/ta',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Tobacco & Alcohol'
                    },
                    {
                        name: 'pmh',
                        url: '/pmh',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Personal Medical History'
                    },
                    {
                        name: 'fmh',
                        url: '/fmh',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Family Medical History'
                    },
                    {
                        name: 'pa',
                        url: '/pa',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Physical Activities'
                    },
                    {
                        name: 'bp2',
                        url: '/bp2',
                        tpl: 'tpls/surveyForm.html',
                        title: 'BP2-Physical Measurements'
                    }

                ]
            },
            {
                name: 'ffqDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/ffq/:memberId',
                tpl: 'tpls/pageDetailNavDisabled.html',
                title: 'FFQ Detail',
                prevState: {name: 'hc.householdDetail.ffq', title: 'FFQ'},
                children: [
                    {
                        name: 'general',
                        url: '/general',
                        tpl: 'tpls/surveyForm.html',
                        title: 'General Information'
                    },
                    {
                        name: 'bev',
                        url: '/bev',
                        tpl: 'tpls/ffqForm.html',
                        title: 'Beverages'
                    },
                    {
                        name: 'cls',
                        url: '/cls',
                        tpl: 'tpls/ffqForm.html',
                        title: 'Cereals'
                    },
                    {
                        name: 'pls',
                        url: '/pls',
                        tpl: 'tpls/ffqForm.html',
                        title: 'Pulses'
                    },
                    {
                        name: 'veg',
                        url: '/veg',
                        tpl: 'tpls/ffqForm.html',
                        title: 'Vegetarian'
                    },
                    {
                        name: 'raw',
                        url: '/raw',
                        tpl: 'tpls/ffqForm.html',
                        title: 'RAW'
                    },
                    {
                        name: 'fruits',
                        url: '/fruits',
                        tpl: 'tpls/ffqForm.html',
                        title: 'Fruits'
                    },
                    {
                        name: 'juice',
                        url: '/juice',
                        tpl: 'tpls/ffqForm.html',
                        title: 'Juice'
                    },
                    {
                        name: 'nonveg',
                        url: '/nonveg',
                        tpl: 'tpls/ffqForm.html',
                        title: 'Non-Veg'
                    },
                    {
                        name: 'sweets',
                        url: '/sweets',
                        tpl: 'tpls/ffqForm.html',
                        title: 'Sweets'
                    },
                    {
                        name: 'spicemix',
                        url: '/spicemix',
                        tpl: 'tpls/ffqForm.html',
                        title: 'SpiceMix'
                    },
                    {
                        name: 'snacks',
                        url: '/snacks',
                        tpl: 'tpls/ffqForm.html',
                        title: 'Snacks'
                    },
                    {
                        name: 'foodAdditives',
                        url: '/foodAdditives',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Food Additives'
                    },
                    {
                        name: 'salt',
                        url: '/salt',
                        tpl: 'tpls/standardForm.html',
                        title: 'Salt Intake'
                    },
                    {
                        name: 'invitationCard',
                        url: '/invitationCard',
                        tpl: 'tpls/surveyForm.html',
                        title: 'Invitation Card'
                    }
                ]
            }


        ]

    });