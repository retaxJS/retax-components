import { retaxKernel } from 'retax';
import { componentsModule, ANNOTATOR } from './inversify';
import { IAnnotator } from './annotator';

retaxKernel.load(componentsModule);

export const annotator = retaxKernel.get<IAnnotator>(ANNOTATOR);
export { AbstractActionsCreator } from './actionsCreator';
export { AbstractApi } from './api';
export { AbstractLifecycleManager } from './lifecycle';
