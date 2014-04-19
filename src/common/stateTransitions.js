angular.module('stateTransitions', [])
    .factory('StateTransitions', function() {

        return [{
            "from": "enum.areaDetail.house",
            "to": "enum.houseDetail.basicInf",
            "param": "houseId"
        }, {
            "from": "enum.houseDetail.household",
            "to": "enum.visitDetail.basicInf",
            "param": "householdId"
        }, {
            "from": "enum.householdDetail.member",
            "to": "enum.memberDetail.basicInf",
            "param": "memberId"
        }, {
            "from": "enum.householdDetail.member",
            "to": "enum.memberDetail.basicInf",
            "param": "memberId"
        }, {
            "from": "enum.householdDetail.visit",
            "to": "enum.visitDetail.basicInf",
            "param": "visitId"
        }, {
            "from": "enum.householdDetail.head",
            "to": "enum.headDetail.basicInf",
            "param": "memberId"
        }, {
            "from": "enum.householdDetail.hosp",
            "to": "enum.hospDetail.basicInf",
            "param": "memberId"
        }, {
            "from": "enum.householdDetail.death",
            "to": "enum.deathDetail.basicInf",
            "param": "memberId"
        },{
            "from":"hc.householdDetail.visit",
            "to":"hc.visitDetail.basicInf"
        }];
    });