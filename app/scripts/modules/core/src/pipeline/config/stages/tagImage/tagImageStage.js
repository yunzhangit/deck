'use strict';

import { Registry } from 'core/registry';

const angular = require('angular');

export const CORE_PIPELINE_CONFIG_STAGES_TAGIMAGE_TAGIMAGESTAGE = 'spinnaker.core.pipeline.stage.tagImageStage';
export const name = CORE_PIPELINE_CONFIG_STAGES_TAGIMAGE_TAGIMAGESTAGE; // for backwards compatibility
angular.module(CORE_PIPELINE_CONFIG_STAGES_TAGIMAGE_TAGIMAGESTAGE, []).config(function() {
  Registry.pipeline.registerStage({
    useBaseProvider: true,
    key: 'upsertImageTags',
    label: 'Tag Image',
    description: 'Tags an image',
  });
});
