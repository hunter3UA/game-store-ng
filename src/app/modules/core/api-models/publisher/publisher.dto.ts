import { TypeOfBase } from '../../enums/type.of.base';

export class PublisherDTO {
  public id: number | string;
  public companyName: string;
  public description: string;
  public homePage: string;
  public contactName: string;
  public contactTitle: string;
  public address: string;
  public country: string;
  public region: string;
  public city: string;
  public fax: string;
  public phone: string;
  public postalCode: string;
  public typeOfBase: TypeOfBase;
}
