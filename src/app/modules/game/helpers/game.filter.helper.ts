import { GameFilterDTO } from '../../core/api-models/game/game.filter.dto';

export class GameFilterHelper {
  static parseParamsObjectToFilterObject(object: any): GameFilterDTO {
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
