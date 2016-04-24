import {
  IActionsCreatorService,
} from 'retax-core';
import { IHashMap } from 'retax-utils';

export interface IActionsCreator extends IActionsCreatorService {
  export(): IExportReturn;
}

export interface IExportReturn extends IHashMap<Function> {}
