import { Injectable } from '@angular/core';
import { GameModel } from '../../api-models/game/game.model';
import { Adapter } from '../adapter';

@Injectable({ providedIn: 'root' })
export class GameAdapter implements Adapter<GameModel> {
  adapt(item: any): GameModel {
    let game = new GameModel();
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
