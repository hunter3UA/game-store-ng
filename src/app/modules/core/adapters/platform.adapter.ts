import { Injectable } from '@angular/core';
import { PlatformType } from '../api-models/platforms/platform.type';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class PlatformAdapter implements Adapter<PlatformType> {
  adapt(item: any): PlatformType {
    let platformType = new PlatformType();
    platformType.id = item.id;
    platformType.type = item.type;
    return platformType;
  }
}
