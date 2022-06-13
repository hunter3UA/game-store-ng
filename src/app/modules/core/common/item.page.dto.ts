import { PageInfoDTO } from './page.info.dto';

export class ItemPageDTO<T> {
  public pageInfo: PageInfoDTO;
  public items: Array<T>;

  constructor() {
    this.items = new Array<T>();
    this.pageInfo = new PageInfoDTO();
  }
}
