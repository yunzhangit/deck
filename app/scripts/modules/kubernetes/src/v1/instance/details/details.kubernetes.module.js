'use strict';

const angular = require('angular');
import { KUBERNETES_INSTANCE_CONTAINER_DETAIL } from './containerDetail.component';
import { KUBERNETES_V1_INSTANCE_DETAILS_DETAILS_CONTROLLER } from './details.controller';
export const KUBERNETES_V1_INSTANCE_DETAILS_DETAILS_KUBERNETES_MODULE = 'spinnaker.instance.details.kubernetes';
export const name = KUBERNETES_V1_INSTANCE_DETAILS_DETAILS_KUBERNETES_MODULE; // for backwards compatibility
angular.module(KUBERNETES_V1_INSTANCE_DETAILS_DETAILS_KUBERNETES_MODULE, [
  KUBERNETES_V1_INSTANCE_DETAILS_DETAILS_CONTROLLER,
  KUBERNETES_INSTANCE_CONTAINER_DETAIL,
]);
