import { TypeOfBase } from '../../enums/type.of.base';

export class PublisherDTO {
  public id: number | string;
  public companyName: string;
  public description: string;
  public homePage: string;
  public typeOfBase: TypeOfBase;
}
