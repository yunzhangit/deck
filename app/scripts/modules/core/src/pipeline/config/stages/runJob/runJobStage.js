'use strict';

import { Registry } from 'core/registry';

const angular = require('angular');

export const CORE_PIPELINE_CONFIG_STAGES_RUNJOB_RUNJOBSTAGE = 'spinnaker.core.pipeline.stage.runJobStage';
export const name = CORE_PIPELINE_CONFIG_STAGES_RUNJOB_RUNJOBSTAGE; // for backwards compatibility
angular.module(CORE_PIPELINE_CONFIG_STAGES_RUNJOB_RUNJOBSTAGE, []).config(function() {
  Registry.pipeline.registerStage({
    useBaseProvider: true,
    key: 'runJob',
    label: 'Run Job',
    description: 'Runs a container',
  });
});
