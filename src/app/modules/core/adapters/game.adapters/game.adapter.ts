import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { GameDTO } from '../../api-models/game/game.dto';
import { Adapter } from '../adapter';

@Injectable({ providedIn: 'root' })
export class GameAdapter implements Adapter<GameDTO> {
  constructor(private datePipe: DatePipe) {}
  adapt(item: any): GameDTO {
    let game = new GameDTO();
    game.id = item.id;
    game.name = item.name;
    game.key = item.key;
    game.description = item.description;
    game.genres = item.genres;
    game.platformTypes = item.platformTypes;
    game.publisher = item.publisher;
    game.price = item.price;
    game.discontinued = item.discontinued;
    game.unitsInStock = item.unitsInStock;
    game.quantityPerUnit = item.quantityPerUnit;
    game.reorderLevel = item.reorderLevel;
    game.numberOfViews = item.numberOfViews;
    game.typeOfBase = item.typeOfBase;
    game.isDeleted = item.isDeleted;
    game.publishedAt = this.datePipe.transform(
      new Date(item.publishedAt),
      'yyyy-MM-dd'
    );
    return game;
  }
}
