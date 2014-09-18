angular.module('separation')
    .controller('SeparationCtrl', function (_, $scope, toaster, $rootScope, $state, $stateParams) {
        var vm = $scope
        vm.separation = []
        vm.currentEdtaTube = ''
        vm.unpacking = $rootScope.unpacking

        console.log(vm.unpacking);
        vm.scanEdta = function (edta) {

            if (!_.contains(vm.unpacking, edta)) {
                toaster.pop('error', '', 'Invalid EDTA tube')
                return
            }

            vm.currentEdtaTube = edta

            if (_.find(vm.separation, {id: vm.currentEdtaTube})) {
                toaster.pop('error', '', 'Duplicate EDTA Tube')
                return;
            }

            if (!_.find(vm.packing, {id: vm.currentEdtaTube}))
                vm.separation.push({id: vm.currentEdtaTube, items: []})

            vm.edta = ''
            jQuery("#cryovial").focus()

        }
        vm.scanCryovial = function (cryovial) {

            var selectedObj = _.find(vm.separation, {id: vm.currentEdtaTube})
            var isDuplicateCryovial = false

            _.each(vm.separation, function (obj) {

                if (_.contains(obj.items, cryovial)) {
                    toaster.pop('error', '', 'Duplicate Cryovial barcode')
                    vm.serumtube = ''
                    isDuplicateCryovial = true
                }
            })
            if (isDuplicateCryovial)
                return

            selectedObj.items.push(cryovial)
            if (selectedObj.items.length == 3)
                jQuery("#edta").focus()
            vm.cryovial = ''

        }
        vm.removeSerumtube = function (barcode) {

            _.remove(vm.separation, function (obj) {
                return obj.id == barcode
            })

        }
        vm.saveBatch = function (packing) {

            toaster.pop('success', '', 'Saved Successfully')
            vm.packingDone = true
            $rootScope.separation = vm.separation
            $state.go('lab.cryoPacking', $stateParams)

        }


    })
;