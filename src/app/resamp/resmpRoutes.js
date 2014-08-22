angular.module('resampRoutes', [])
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
                    }
                ]
            }
        ]});
