import { Injectable } from '@angular/core';
import { UpdateUserDTO } from '../../api-models/user/update.user.dto';
import { Adapter } from '../adapter';

@Injectable({ providedIn: 'root' })
export class EditUserAdapter implements Adapter<UpdateUserDTO> {
  adapt(item: any): UpdateUserDTO {
    let updateUserDto = new UpdateUserDTO();
    updateUserDto.role = item.role;
    updateUserDto.userName = item.userName;
    updateUserDto.email = item.email;

    return updateUserDto;
  }
}
