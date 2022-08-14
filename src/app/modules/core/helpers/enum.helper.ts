import { SelectListItem } from '../common/select.list.item';

export class EnumHelper {
  public static mapStringEnumToSelectList(type: any): Array<SelectListItem> {
    let items = Object.entries(type).map(([key, value]) => {
      return new SelectListItem(key, value);
    });
    return items;
  }

  public static mapNumberEnumToSelectList(type: any): Array<SelectListItem> {
    let items = new Array<SelectListItem>();
    Object.entries(type).map(([k, v]) => items.push(new SelectListItem(k, v)));
    items = items.slice(items.length / 2, items.length);
    return items;
  }

  public static mapStringEnumToStringList(type: any): Array<string> {
    let items = Object.entries(type).map(([key, value]) => {
      return value.toString();
    });
    return items;
  }
  public static mapNumberEnumToStringList(type: any): Array<string> {
    let items = new Array<string>();
    items = Object.entries(type).map(([k, v]) => {
      return v.toString();
    });
    items = items.slice(0, items.length / 2);
    return items;
  }
}
