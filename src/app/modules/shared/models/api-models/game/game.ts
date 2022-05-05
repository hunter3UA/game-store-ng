import { Genre } from '../genre';
import { PlatformType } from '../platform.type';
import { Publisher } from '../publisher';

export class Game {
  constructor(
    public id: number,
    public name: string,
    public key: string,
    public description: string,
    public genres: Array<Genre>,
    public platformTypes: Array<PlatformType>,
    public publisher: Publisher,
    public price: number,
    public discontinued: boolean,
    public unitsInStock: number
  ) {}
}
