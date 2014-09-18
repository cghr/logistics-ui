angular.module('cryoPacking', ['ui.router', 'lodash', 'cgForm.ngEnter', 'toaster'])
    .config(function ($stateProvider) {

        $stateProvider.state('lab.cryoPacking', {
            url: '/cyroPacking',
            templateUrl: 'lab/cryoPacking/cryoPacking.html',
            controller: 'CryoPackingCtrl'
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
            console.log(obj.items);
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


