import { module } from 'angular';

import { ArtifactTypePatterns } from 'core/artifact';
import { IArtifact } from 'core/domain/IArtifact';
import { Registry } from 'core/registry';

import './base64.artifact.less';

export const BASE_64_ARTIFACT_TYPE = 'embedded/base64';
export const BASE_64_ARTIFACT_ACCOUNT = 'embedded-artifact';

controllerFn.$inject = ['artifact'];
function controllerFn(artifact: IArtifact) {
  this.artifact = artifact;
  this.artifact.type = BASE_64_ARTIFACT_TYPE;
}

export const BASE64_ARTIFACT = 'spinnaker.core.pipeline.trigger.artifact.base64';
module(BASE64_ARTIFACT, []).config(() => {
  Registry.pipeline.mergeArtifactKind({
    label: 'Base64',
    typePattern: ArtifactTypePatterns.EMBEDDED_BASE64,
    type: BASE_64_ARTIFACT_TYPE,
    description: 'An artifact that includes its referenced resource as part of its payload.',
    key: 'base64',
    isDefault: false,
    isMatch: true,
    controller: controllerFn,
    controllerAs: 'ctrl',
    template: `
<div class="col-md-12">
  <div class="form-group row">
    <label class="col-md-2 sm-label-right">
      Name
    </label>
    <div class="col-md-8">
      <input type="text"
             placeholder="base64-artifact"
             class="form-control input-sm"
             ng-model="ctrl.artifact.name" />
    </div>
  </div>
</div>
`,
  });
});
