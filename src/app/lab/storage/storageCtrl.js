angular.module('storage')
    .controller('StorageCtrl', function ($scope, _, $rootScope, toaster) {

        var vm = $scope
        vm.cryoBoxes = $rootScope.cryoBoxes
        vm.usedCryoBoxes = []
        vm.storage = [
            {id: 1, racks: [
                {id: 1, items: []},
                {id: 2, items: []},
                {id: 3, items: []},
                {id: 4, items: []}
            ]},
            {id: 2, racks: [
                {id: 1, items: []},
                {id: 2, items: []},
                {id: 3, items: []},
                {id: 4, items: []}
            ]},
            {id: 3, racks: [
                {id: 1, items: []},
                {id: 2, items: []},
                {id: 3, items: []},
                {id: 4, items: []}
            ]},
            {id: 4, racks: [
                {id: 1, items: []},
                {id: 2, items: []},
                {id: 3, items: []},
                {id: 4, items: []}
            ]}
        ]
        vm.currentFreezerId = 0
        vm.currentRackId = 0

        vm.selectFreezer = function (id) {

            vm.currentFreezerId = id
            vm.currentFreezer = _.find(vm.storage, {id: id})

        }
        vm.selectRack = function (rackId) {

            vm.currentRackId = rackId
            vm.rackItems = _.find(vm.currentFreezer.racks, {id: rackId}).items
        }
        vm.scanCryovialBox = function (cryovialBox) {


            vm.rackItems = _.find(vm.currentFreezer.racks, {id: vm.currentRackId}).items
            if (!_.find(vm.cryoBoxes, {id: cryovialBox})) {
                toaster.pop('error', '', 'Invalid cryovial Box')
                return
            }
            var freezer = _.find(vm.storage, {id: vm.currentFreezerId})
            var rack = _.find(freezer.racks, {id: vm.currentRackId})
            if (!rack) {
                toaster.pop('error', '', 'Pls select a Rack')
                return
            }
            if (rack.items.length == 18) {
                toaster.pop('error', '', 'Rack is Full.Choose a diff rack')
                return
            }
            if (_.contains(vm.usedCryoBoxes, cryovialBox)) {
                toaster.pop('error', '', 'Cryovial box alreay keypt inside freezer')
                return

            }
            rack.items.push(cryovialBox)
            vm.cryovialBox = ''
            vm.usedCryoBoxes.push(cryovialBox)

        }
        vm.saveBatch = function (storage) {

            toaster.pop('success', '', 'Saved successfully')
            $rootScope.storage = storage
        }

    })