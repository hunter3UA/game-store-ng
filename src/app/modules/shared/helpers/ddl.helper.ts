import { SelectListItem } from '../../core/common/select.list.item';

export class DdlHelper {
  public mapToSelectList(type: any): Array<SelectListItem> {
    let items = Object.entries(type).map(([key, value]) => {
      return new SelectListItem(key, value);
    });

    return items;
  }
}
