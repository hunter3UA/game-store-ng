import { GameDTO } from '../game/game.dto';

export class OrderDetailsDTO {
  public id: number;
  public quantity: number;
  public customerId: number;
  public price: number;
  public discount: number;
  public orderId: number;
  public game: GameDTO;
  public total: number;
}
