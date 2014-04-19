angular.module('idService', ['appDefaultConfig'])
	.factory('IDService', function($http, AppDefaultConfig, $location) {

		var service = {};

		service.getNextID = function() {

			var idService = AppDefaultConfig.serviceBaseUrl + 'api/IDService' + $location.url();
			var promise = $http.get(idService).then(function(resp) {
				return resp.data;
			});
			return promise;
		};


		return service;
	});