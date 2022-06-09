export class QueryHelper {
  static parseObjectToQueryString(object: any): string {
    let str: string =
      '?' +
      Object.keys(object)
        .map((key) => {
          if (object[key] != '') {
            if (object[key] instanceof Array) {
              let arr = object[key];
              let subStr = Object.keys(arr)
                .map((arrayKey) => {
                  return `${key}=${arr[arrayKey]}`;
                })
                .join('&');
              return subStr;
            } else return `${key}=${encodeURIComponent(object[key])}`;
          } else return '';
        })
        .join('&');

    return str;
  }

  static removeEmptyFields(object: any): any {
    Object.keys(object).forEach((key) => {
      if (
        (object instanceof Array && object[key].length == 0) ||
        object[key] == ''
      ) {
        delete object[key];
      }
    });
    return object;
  }
}
