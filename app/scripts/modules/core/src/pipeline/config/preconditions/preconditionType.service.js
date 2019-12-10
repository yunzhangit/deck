'use strict';

const angular = require('angular');

export const CORE_PIPELINE_CONFIG_PRECONDITIONS_PRECONDITIONTYPE_SERVICE =
  'spinnaker.core.pipeline.config.preconditions.service';
export const name = CORE_PIPELINE_CONFIG_PRECONDITIONS_PRECONDITIONTYPE_SERVICE; // for backwards compatibility
angular
  .module(CORE_PIPELINE_CONFIG_PRECONDITIONS_PRECONDITIONTYPE_SERVICE, [
    require('./preconditionTypeConfig.provider').name,
  ])
  .factory('preconditionTypeService', [
    'preconditionTypeConfig',
    function(preconditionTypeConfig) {
      function listPreconditionTypes() {
        return preconditionTypeConfig.listPreconditionTypes();
      }

      function getPreconditionType(key) {
        return _.find(preconditionTypeConfig.listPreconditionTypes(), { key: key });
      }

      return {
        listPreconditionTypes: listPreconditionTypes,
        getPreconditionType: getPreconditionType,
      };
    },
  ]);
