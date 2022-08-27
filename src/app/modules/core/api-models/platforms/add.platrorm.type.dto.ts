import { PlatformTypeTranslateDTO } from './platform.translate.dto';

export class AddPlatformTypeDTO {
  public type: string;
  public translations: Array<PlatformTypeTranslateDTO>;
}
