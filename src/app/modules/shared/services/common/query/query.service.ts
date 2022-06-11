import { Injectable } from '@angular/core';
import { GameFilterDTO } from 'src/app/modules/core/api-models/game/game.filter.dto';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor() {}

  parseObjectToQueryString(object: any): string {
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

  parseParamsObjectToFilterObject(object: any): GameFilterDTO {
    let gameFilter: GameFilterDTO = new GameFilterDTO();
    if (object['name'] != undefined) {
      gameFilter.name = object['name'];
    }

    if (object['genres'] != undefined) {
      gameFilter.genres = Array.from(object['genres'], Number);
    }
    if (object['publishers'] != undefined) {
      gameFilter.publishers = Array.from(object['publishers'], Number);
    }
    if (object['platforms'] != undefined) {
      gameFilter.platforms = Array.from(object['platforms'], Number);
    }

    if (
      Number(object['minPrice']) !== NaN &&
      object['minPrice'] != undefined &&
      Number(object['minPrice']) > 0
    ) {
      gameFilter.minPrice = Number(object['minPrice']);
    }

    if (
      Number(object['maxPrice']) != NaN &&
      object['maxPrice'] != undefined &&
      Number(object['maxPrice']) > 0
    ) {
      gameFilter.maxPrice = Number(object['maxPrice']);
    }

    if (
      Number(object['page']) !== NaN &&
      object['page'] != undefined &&
      Number(object['page']) > 0
    ) {
      gameFilter.page = Number(object['page']);
    }

    if (
      Number(object['elementsOnPage']) !== NaN &&
      object['elementsOnPage'] != undefined &&
      Number(object['elementsOnPage']) > 0
    ) {
      gameFilter.elementsOnPage = Number(object['elementsOnPage']);
    }

    if (
      Number(object['sortingType']) !== NaN &&
      object['sortingType'] != undefined &&
      Number(object['sortingType']) > 0
    ) {
      gameFilter.sortingType = Number(object['sortingType']);
    }

    if (
      Number(object['publishingDate']) !== NaN &&
      object['publishingDate'] != undefined &&
      Number(object['publishingDate']) > 0
    ) {
      gameFilter.publishingDate = Number(object['publishingDate']);
    }

    return gameFilter;
  }
}
