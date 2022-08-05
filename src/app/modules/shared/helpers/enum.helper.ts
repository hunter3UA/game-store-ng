import { SelectListItem } from '../../core/common/select.list.item';

export class EnumHelper {
  public mapToSelectList(type: any): Array<SelectListItem> {
    let items = Object.entries(type).map(([key, value]) => {
      return new SelectListItem(key, value);
    });
    return items;
  }

  public mapToStrinList(type: any): Array<string> {
    let items = Object.entries(type).map(([key, value]) => {
      return value.toString();
    });
    return items;
  }
}
