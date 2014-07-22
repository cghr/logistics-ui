angular.module('schemaLoader', ['lodash'])
    .service('SchemaLoader', function SchemaLoader(_, $http, $q, $log) {


        SchemaLoader.allSchemas = []

        this.loadAllSchemas = function (schemaNames, schemaPath) {

            var promises = _.map(schemaNames, function (schema) {
                return $http.get(schemaPath + schema + '.json')
            })

            $q.all(promises).then(done, fail)

            function done(responses) {

                _.each(responses, function (response, index) {
                    SchemaLoader.allSchemas.push(response.data)
                })

            }

            function fail(e) {
                $log.error('Failed to load json schemas')
                $log.error(e)
            }

        }
    })