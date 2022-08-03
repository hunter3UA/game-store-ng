import { Role } from '../../enums/role';

export class UpdateUserDTO {
  public userName: string;
  public email: string;
  public role: Role;
}
