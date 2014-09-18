angular.module('storage', ['ui.router', 'lodash', 'cgForm.ngEnter', 'toaster'])
    .config(function ($stateProvider) {

        $stateProvider.state('lab.storage', {
            url: '/storage',
            templateUrl: 'lab/storage/storage.html',
            controller: 'StorageCtrl'
        })

    });