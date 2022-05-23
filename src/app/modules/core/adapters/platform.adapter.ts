import { Injectable } from '@angular/core';
import { PlatformTypeModel } from '../api-models/platforms/platform.type.model';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class PlatformAdapter implements Adapter<PlatformTypeModel> {
  adapt(item: any): PlatformTypeModel {
    let platformType = new PlatformTypeModel();
    platformType.id = item.id;
    platformType.type = item.type;

    return platformType;
  }
}
