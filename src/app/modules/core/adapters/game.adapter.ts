import { Injectable } from '@angular/core';
import { Game } from '../api-models/game/game';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class GameAdapter implements Adapter<Game> {
  adapt(item: any): Game {
    return new Game(
      item.id,
      item.name,
      item.key,
      item.description,
      item.genres,
      item.platformTypes,
      item.publisher,
      item.price,
      item.discontinued,
      item.unitsInStock
    );
  }
}
