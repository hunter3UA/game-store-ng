import { GameFilterDTO } from '../../core/api-models/game/game.filter.dto';

export class GameFilterHelper {
  static parseParamsObjectToFilterObject(object: any): GameFilterDTO {
    let gameFilter: GameFilterDTO = new GameFilterDTO();
    if (object['name'] != undefined && object['name'].length >= 3) {
      gameFilter.name = object['name'];
    }

    if (object['genres'] != undefined) {
      gameFilter.genres =
        object.genres instanceof Array ? object.genres : [object.genres];
      gameFilter.genres = Array.from(gameFilter.genres, Number).filter((el) => {
        return !Number.isNaN(el) && el > 0 && el < 1000;
      });
    }

    if (object['publishers'] != undefined) {
      gameFilter.publishers =
        object.publishers instanceof Array
          ? object.publishers
          : [object.publishers];
      gameFilter.publishers = Array.from(gameFilter.publishers, Number).filter(
        (el) => {
          return !Number.isNaN(el) && el > 0 && el < 1000;
        }
      );
    }

    if (object['platforms'] != undefined) {
      gameFilter.platforms =
        object.platforms instanceof Array
          ? object.platforms
          : [object.platforms];
      gameFilter.platforms = Array.from(gameFilter.platforms, Number).filter(
        (el) => {
          return !Number.isNaN(el) && el > 0 && el < 1000;
        }
      );
    }

    if (
      Number(object['minPrice']) !== NaN &&
      object['minPrice'] != undefined &&
      Number(object['minPrice']) > 0 &&
      Number(object['minPrice']) < 100000
    ) {
      gameFilter.minPrice = Number(object['minPrice']);
    }

    if (
      Number(object['maxPrice']) != NaN &&
      object['maxPrice'] != undefined &&
      Number(object['maxPrice']) > 0 &&
      Number(object['maxPrice']) < 100000
    ) {
      gameFilter.maxPrice = Number(object['maxPrice']);
    }

    if (
      Number(object['page']) !== NaN &&
      object['page'] != undefined &&
      Number(object['page']) > 0 &&
      Number(object['page']) < 100000
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
      Number(object['sortingType']) > 0 &&
      Number(object['sortingType']) < 10
    ) {
      gameFilter.sortingType = Number(object['sortingType']);
    }

    if (
      Number(object['publishingDate']) !== NaN &&
      object['publishingDate'] != undefined &&
      Number(object['publishingDate']) > 0 &&
      Number(object['publishingDate']) < 10
    ) {
      gameFilter.publishingDate = Number(object['publishingDate']);
    }

    return gameFilter;
  }
}
