'use strict';

const angular = require('angular');

import { SETTINGS } from '@spinnaker/core';

export const CANARY_CANARY_CANARYEXECUTIONDETAILS_CONTROLLER = 'spinnaker.canary.details.controller';
export const name = CANARY_CANARY_CANARYEXECUTIONDETAILS_CONTROLLER; // for backwards compatibility
angular
  .module(CANARY_CANARY_CANARYEXECUTIONDETAILS_CONTROLLER, [require('@uirouter/angularjs').default])
  .controller('CanaryExecutionDetailsCtrl', [
    '$scope',
    '$stateParams',
    'executionDetailsSectionService',
    function($scope, $stateParams, executionDetailsSectionService) {
      $scope.configSections = ['canarySummary', 'canaryConfig', 'taskStatus'];

      $scope.configUrl = SETTINGS.canaryConfig ? SETTINGS.canaryConfig.analysisConfigUrl : null;

      let initialized = () => {
        $scope.detailsSection = $stateParams.details;
        $scope.canary = $scope.stage.context.canary;

        if ($scope.canary) {
          $scope.canaryConfig = $scope.canary.canaryConfig;
          $scope.baseline = $scope.stage.context.baseline;
          $scope.canaryDeployments = $scope.canary.canaryDeployments;
        }
      };

      let initialize = () => executionDetailsSectionService.synchronizeSection($scope.configSections, initialized);

      initialize();

      $scope.$on('$stateChangeSuccess', initialize);
    },
  ]);
