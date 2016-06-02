'use strict';

//Articles service used for communicating with the Job REST endpoints
angular.module('jobs').factory('Jobs', ['$resource',
	function($resource) {
		return $resource('jobs/:jobId', {
			jobId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);