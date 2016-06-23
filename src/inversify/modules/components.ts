import { KernelModule, interfaces } from 'inversify';

import { AbstractActionsCreator } from '../../actionsCreator';
import { IAnnotator, Annotator } from '../../annotator';
import { AbstractApi } from '../../api';
import { IEnhancer, Enhancer } from '../../enhancer';
import { AbstractLifecycleManager } from '../../lifecycle';

import {
  ACTIONS_CREATOR_CONSTRUCTOR,
  ANNOTATOR,
  API_CONSTRUCTOR,
  ENHANCER,
  LIFECYCLE_MANAGER_CONSTRUCTOR,
} from '../identifiers';

export default new KernelModule((bind: interfaces.Bind) => {
  bind<IAnnotator>(ANNOTATOR).to(Annotator);
  bind<IEnhancer>(ENHANCER).to(Enhancer);

  bind<typeof AbstractApi>(API_CONSTRUCTOR).toConstantValue(AbstractApi);
  bind<typeof AbstractActionsCreator>(ACTIONS_CREATOR_CONSTRUCTOR).toConstantValue(AbstractActionsCreator);
  bind<typeof AbstractLifecycleManager>(LIFECYCLE_MANAGER_CONSTRUCTOR).toConstantValue(AbstractLifecycleManager);
});
