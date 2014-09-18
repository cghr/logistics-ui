angular.module('separation', ['ui.router', 'lodash', 'cgForm.ngEnter', 'toaster'])
    .config(function ($stateProvider) {

        $stateProvider.state('lab.separation', {
            url: '/separation',
            templateUrl: 'lab/separation/separation.html',
            controller: 'SeparationCtrl'
        })

    });