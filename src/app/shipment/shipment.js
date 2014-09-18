angular.module('shipment', ['ui.router', 'shipmentPacking', 'shipmentUnpacking', 'lodash'])
    .config(function ($stateProvider) {

        $stateProvider.state('shipment', {
            url: '/shipment',
            templateUrl: 'shipment/shipment.html',
            controller: 'ShipmentCtrl'
        })

    })
