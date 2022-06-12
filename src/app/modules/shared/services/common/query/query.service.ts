import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor() {}

  removeEmptyFields(object: any): any {
    Object.keys(object).forEach((key) => {
      if (
        (object instanceof Array && object[key].length == 0) ||
        object[key] == '' ||
        object[key] == undefined
      ) {
        delete object[key];
      }
    });
    return object;
  }
}
