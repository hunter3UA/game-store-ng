import { Role } from '../../enums/role';

export class UserDTO {
  public id: string;
  public userName: string;
  public email: string;
  public role: Role;
  public publisherName: string;
}
