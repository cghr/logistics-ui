angular.module('appService', ['appDefaultConfig'])
	.factory('AppService', function($http, AppDefaultConfig) {

		var restUrl = AppDefaultConfig.serviceBaseUrl + '/api/rest';

		return {};

	});