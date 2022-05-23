import { GameModel } from '../game/game.model';

export class OrderDetailsModel {
  public id: number;
  public quantity: number;
  public customerId: number;
  public price: number;
  public discount: number;
  public orderId: number;
  public game: GameModel;
  public total: number;
}
