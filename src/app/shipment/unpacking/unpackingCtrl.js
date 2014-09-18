angular.module('shipmentUnpacking')
    .controller('ShipmentUnPackingCtrl', function (_, $scope, toaster, $rootScope) {
        var vm = $scope
        vm.unpacking = []
        vm.currentIcebox = ''
        vm.packing = $rootScope.shipmentPacking

        vm.scanIceBox = function (icebox) {

            if (!_.find(vm.packing, {id: icebox})) {
                toaster.pop('error', '', 'Invalid Icebox')
                return
            }

            vm.currentIcebox = icebox

            if (!_.find(vm.unpacking, {id: vm.currentIcebox})) {
                vm.unpacking.push({id: vm.currentIcebox, items: []})
            }
            vm.currentBoxItems = _.find(vm.unpacking, {id: vm.currentIcebox}).items

            vm.icebox = ''
            jQuery("#serumtube").focus()

        }
        vm.scanSerumtube = function (serumtube) {

            if (!_.contains(_.find(vm.packing, {id: vm.currentIcebox}).items, serumtube)) {
                toaster.pop('error', '', 'Invalid EDTA tube for the Icebox')
                return
            }
            var selectedObj = _.find(vm.unpacking, {id: vm.currentIcebox})

            if (_.contains(selectedObj.items, serumtube)) {
                toaster.pop('error', '', 'Duplicate EDTA barcode')
                vm.serumtube = ''
                return
            }
            selectedObj.items.push(serumtube)
            vm.currentBoxItems = selectedObj.items
            vm.serumtube = ''

        }
        vm.removeSerumtube = function (barcode) {

            _.remove(_.find(vm.unpacking, {id: vm.currentIcebox}).items, function (item) {
                return item == barcode
            })

        }
        vm.saveBatch = function (unpacking) {

            console.log('shipment unpacking');
            toaster.pop('success', '', 'Saved Successfully')
            vm.unpackingDone = true
            vm.missing = []
            _.each(vm.packing, function (box) {
                var missingItems = _.difference(box.items, _.find(vm.unpacking, {id: box.id}).items)
                if (missingItems.length > 0)
                    vm.missing.push({id: box.id, items: missingItems })
            })
            $rootScope.shipmentUnpacking = []
            _.each(vm.unpacking, function (box) {

                $rootScope.shipmentUnpacking = _.union($rootScope.unpacking, box.items)
            })

        }
        vm.saveReason = function () {

            toaster.pop('success', '', 'Saved Successfully')
        }


    });