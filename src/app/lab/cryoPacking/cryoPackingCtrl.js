angular.module('cryoPacking')
    .controller('CryoPackingCtrl', function (_, $scope, toaster, $rootScope) {

        var vm = $scope
        vm.packing = []
        vm.currentIcebox = ''
        vm.usedCryovials = []

        vm.scanIceBox = function (icebox) {

            vm.currentIcebox = icebox

            if (!_.find(vm.packing, {id: vm.currentIcebox})) {
                vm.packing.push({id: vm.currentIcebox, rows: vm.createFreshRows()})
            }
            vm.currentBox = _.find(vm.packing, {id: vm.currentIcebox})

            vm.icebox = ''
            jQuery("#serumtube").focus()
            vm.rowIndex = 0
            vm.colIndex = 0

        }
        vm.createFreshRows = function () {

            var rows = []
            _.each(_.range(10), function () {

                var col = []
                _.each(_.range(10), function () {
                    col.push({barcode: ''})
                })
                rows.push({col: col})
            })
            return rows

        }
        vm.scanSerumtube = function (serumtube) {

            if (vm.rowIndex + 1 == 11) {
                toaster.pop('error', '', 'Box is full.Scan a new Box')
                return
            }
            var validCryovial = false
            _.each($rootScope.separation, function (edta) {
                _.each(edta.items, function (item) {
                    if (item == serumtube) {
                        validCryovial = true
                    }

                })
            })
            if (!validCryovial) {
                toaster.pop('error', '', 'Invalid Cryovial barcode')
                return
            }


            var selectedObj = _.find(vm.packing, {id: vm.currentIcebox})
            if (_.contains(selectedObj.items, serumtube)) {
                toaster.pop('error', '', 'Duplicate Cryovial barcode')
                vm.serumtube = ''
                return
            }
            if (_.contains(vm.usedCryovials, serumtube)) {
                toaster.pop('error', '', 'Cryovial already used')
                return
            }
            selectedObj.rows[vm.rowIndex].col[vm.colIndex].barcode = serumtube
            selectedObj.rows[vm.rowIndex].col[vm.colIndex].status = 'green'
            vm.usedCryovials.push(serumtube)
            vm.colIndex++
            if (vm.colIndex + 1 == 11 && vm.rowIndex + 1 == 11) {
                toaster.pop('error', '', 'Box is full')
                return
            }
            if (vm.colIndex + 1 == 11) {
                vm.colIndex = 0
                vm.rowIndex = vm.rowIndex + 1
            }

            //vm.currentBox = selectedObj.rows
            vm.serumtube = ''

        }
        vm.undo = function () {

            console.log('in undo');
            var cryoBox = _.find(vm.packing, {id: vm.currentIcebox})
            console.log('cryoBox');
            console.log(cryoBox);
            console.log(vm.rowIndex, vm.colIndex);
            var col = cryoBox.rows[vm.rowIndex].col
            var lastCryovial = col[vm.colIndex - 1]
            col.splice(vm.colIndex - 1, 1)

            _.remove(vm.usedCryovials, function (item) {
                return item == lastCryovial
            })

            vm.currentBox = _.find(vm.packing, {id: vm.currentIcebox})
            vm.colIndex--;

        }
        vm.saveBatch = function (packing) {

            toaster.pop('success', '', 'Saved Successfully')
            vm.packingDone = true
            vm.cryoBoxes = []

            _.each(packing, function (box) {
                var boxItems = []
                _.each(box.rows, function (row) {
                    _.each(row.col, function (col) {

                        if (col.barcode.length > 0)
                            boxItems.push(col.barcode)
                    })
                })
                vm.cryoBoxes.push({id: box.id, items: boxItems})

            })

            $rootScope.cryoBoxes = vm.cryoBoxes
            $rootScope.cryoBoxesWithRowsCols = vm.packing


        }


    });