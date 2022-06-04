import { Injectable } from '@angular/core';
import { PlatformTypeDTO } from '../api-models/platforms/platform.type.dto';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class PlatformAdapter implements Adapter<PlatformTypeDTO> {
  adapt(item: any): PlatformTypeDTO {
    let platformType = new PlatformTypeDTO();
    platformType.id = item.id;
    platformType.type = item.type;

    return platformType;
  }
}
