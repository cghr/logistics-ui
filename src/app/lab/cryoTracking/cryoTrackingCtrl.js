angular.module('cryoTracking')
    .controller('CryoTrackingCtrl', function ($rootScope, $scope, _, toaster) {


        var vm = $scope
        vm.cryoBoxes = $rootScope.cryoBoxes
        vm.cryoBoxesWithRowsCols = $rootScope.cryoBoxesWithRowsCols

        vm.searchCryovial = function (cryovial) {


            vm.currentBox = _.find(vm.cryoBoxesWithRowsCols, {id: findCryovialBox(cryovial)})
            _.each(vm.currentBox.rows, function (row) {

                _.each(row.col, function (col) {
                    if (col.searchStatus == 1)
                        col.searchStatus = 0

                    if (col.barcode == cryovial)
                        col.searchStatus = 1

                })
            })


        }


        function findCryovialBox(cryovial) {

            var cryoBox
            _.each(vm.cryoBoxes, function (box) {

                if (_.contains(box.items, cryovial)) {
                    cryoBox = box.id
                    return
                }
            })
            return cryoBox
        }


    })
