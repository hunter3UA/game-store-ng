import { PlatformTypeTranslateDTO } from './platform.translate.dto';

export class PlatformTypeDTO {
  public id: number;
  public type: string;
  public translations: Array<PlatformTypeTranslateDTO>;
}
