'use strict';

const angular = require('angular');

import './multipleServerGroup.component.less';

export const CORE_SERVERGROUP_DETAILS_MULTIPLESERVERGROUP_COMPONENT =
  'spinnaker.core.serverGroup.details.multipleServerGroup.component';
export const name = CORE_SERVERGROUP_DETAILS_MULTIPLESERVERGROUP_COMPONENT; // for backwards compatibility
angular.module(CORE_SERVERGROUP_DETAILS_MULTIPLESERVERGROUP_COMPONENT, []).component('multipleServerGroup', {
  bindings: {
    serverGroup: '=',
  },
  templateUrl: require('./multipleServerGroup.component.html'),
});
