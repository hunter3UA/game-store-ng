import { Injectable } from '@angular/core';
import { GameModelModel } from '../../api-models/game/game.model';
import { Adapter } from '../adapter';

@Injectable({ providedIn: 'root' })
export class GameAdapter implements Adapter<GameModelModel> {
  adapt(item: any): GameModelModel {
    let game = new GameModelModel();
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

    return game;
  }
}
