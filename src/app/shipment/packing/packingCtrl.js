angular.module('shipmentPacking')
    .controller('ShipmentPackingCtrl', function (_, $scope, toaster, $rootScope) {
        var vm = $scope
        vm.packing = []
        vm.currentIcebox = ''

        vm.scanIceBox = function (icebox) {

            vm.currentIcebox = icebox

            if (!_.find(vm.packing, {id: vm.currentIcebox})) {
                vm.packing.push({id: vm.currentIcebox, items: []})
            }
            vm.currentBoxItems = _.find(vm.packing, {id: vm.currentIcebox}).items

            vm.icebox = ''
            jQuery("#serumtube").focus()

        }
        vm.scanSerumtube = function (serumtube) {

            var isDuplicateItem = false
            _.each(vm.packing, function (selectedObj) {


                if (_.contains(selectedObj.items, serumtube)) {
                    isDuplicateItem = true
                }

            })
            if (isDuplicateItem) {
                toaster.pop('error', '', 'Duplicate EDTA barcode')
                vm.serumtube = ''
                return


            }
            var invalidCryoBox = false
            if (!_.find($rootScope.cryoBoxes, {id: serumtube})) {
                toaster.pop('error', '', 'Invalid Cryovial Box')
                return
            }

            var selectedObj = _.find(vm.packing, {id: vm.currentIcebox})


            selectedObj.items.push(serumtube)
            vm.currentBoxItems = selectedObj.items
            vm.serumtube = ''

        }
        vm.removeSerumtube = function (barcode) {

            _.remove(_.find(vm.packing, {id: vm.currentIcebox}).items, function (item) {
                return item == barcode
            })

        }
        vm.saveBatch = function (packing) {

            toaster.pop('success', '', 'Saved Successfully')
            vm.packingDone = true
            $rootScope.shipmentPacking = packing

        }


    });