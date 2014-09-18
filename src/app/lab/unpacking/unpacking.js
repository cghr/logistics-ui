angular.module('unpacking', ['ui.router', 'lodash', 'cgForm.ngEnter', 'toaster'])
    .config(function ($stateProvider) {

        $stateProvider.state('lab.unpacking', {
            url: '/unpacking',
            templateUrl: 'lab/unpacking/unpacking.html',
            controller: 'UnPackingCtrl'
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


