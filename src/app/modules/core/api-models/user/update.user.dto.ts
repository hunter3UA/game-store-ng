import { Role } from '../../enums/role';

export class UpdateUserDTO {
  public id: string;
  public userName: string;
  public email: string;
  public role: Role;
  public publisherName: string;
}
