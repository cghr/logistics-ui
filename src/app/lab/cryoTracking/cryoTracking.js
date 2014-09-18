angular.module('cryoTracking', ['ui.router', 'lodash', 'cgForm.ngEnter', 'toaster'])
    .config(function ($stateProvider) {

        $stateProvider.state('lab.cryoTracking', {
            url: '/cryoTracking',
            templateUrl: 'lab/cryoTracking/cryoTracking.html',
            controller: 'CryoTrackingCtrl'
        })

    });