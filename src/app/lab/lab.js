angular.module('lab', ['ui.router', 'unpacking', 'separation', 'cryoPacking', 'storage','cryoTracking'])
    .config(function ($stateProvider) {

        $stateProvider.state('lab', {
            url: '/lab',
            templateUrl: 'lab/lab.html',
            controller: 'LabCtrl'
        })

    })