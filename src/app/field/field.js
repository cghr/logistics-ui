angular.module('field', ['ui.router', 'packing', 'lodash'])
    .config(function ($stateProvider) {

        $stateProvider.state('field', {
            url: '/field',
            templateUrl: 'field/field.html',
            controller: 'FieldCtrl'
        })

    })
