import { Injectable } from '@angular/core';
import { Game } from '../api-models/game/game';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class GameAdapter implements Adapter<Game> {
  adapt(item: any): Game {
    let game = new Game();
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
