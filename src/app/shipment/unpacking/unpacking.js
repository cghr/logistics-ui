angular.module('shipmentUnpacking', ['ui.router', 'lodash', 'cgForm.ngEnter', 'toaster'])
    .config(function ($stateProvider) {

        $stateProvider.state('shipment.unpacking', {
            url: '/unpacking',
            templateUrl: 'shipment/unpacking/unpacking.html',
            controller: 'ShipmentUnPackingCtrl'
        })

    })
    .filter('reverse', function () {
        return function (items) {
            if (!items)
                return;
            return items.slice().reverse();
        };
    })
    .filter('currentPackingLength', function (_) {

        return function (collection, currentIcebox) {
            var currentBox = _.find(collection, {id: currentIcebox})
            if (!currentBox) {
                return
            }
            return currentBox.items.length
        }
    })
    .filter('extractItems', function () {

        return function (obj) {
            return obj.items
        }
    })
    .filter('groupByIcebox', function (_) {

        return function (collection) {
            var boxes = []
            _.each(collection, function (item) {

                if (!_.contains(boxes, item.icebox))
                    boxes.push({barcode: item.icebox})
            })
            return boxes
        }

    })


