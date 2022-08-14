import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/modules/user/services/token-storage/token-storage.service';
import { PublisherDTO } from '../../../api-models/publisher/publisher.dto';
import { Role } from '../../../enums/role';
import { TypeOfBase } from '../../../enums/type.of.base';

@Injectable({
  providedIn: 'root',
})
export class PublisherPermissionService {
  constructor(private tokenService: TokenStorageService) {}

  removePublisherAccess(publisher: PublisherDTO) {
    if (
      !this.tokenService.hasPermission([Role.Admin, Role.Manager]) ||
      publisher.typeOfBase == TypeOfBase.Northwind
    )
      return false;
    return true;
  }
}
