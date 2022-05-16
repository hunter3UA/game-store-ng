import { GameModelModel } from '../game/game.model';

export class OrderDetailsModel {
  id: number;
  quantity: number;
  customerId: number;
  price: number;
  discount: number;
  orderId: number;
  game: GameModelModel;
  total: number;
}
