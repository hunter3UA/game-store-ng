import { Injectable } from '@angular/core';
import { GameDTO } from '../../api-models/game/game.dto';
import { Adapter } from '../adapter';

@Injectable({ providedIn: 'root' })
export class GameAdapter implements Adapter<GameDTO> {
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
    game.publishedAt = new Date(item.publishedAt);

    return game;
  }
}
