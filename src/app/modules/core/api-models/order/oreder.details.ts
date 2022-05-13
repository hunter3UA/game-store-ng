import { Game } from '../game/game';

export class OrderDetails {
  id: number;
  quantity: number;
  customerId: number;
  price: number;
  discount: number;
  orderId: number;
  game: Game;
  total: number;
}
