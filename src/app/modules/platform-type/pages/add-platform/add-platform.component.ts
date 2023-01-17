import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AddPlatformTypeDTO } from 'src/app/modules/core/api-models/platforms/add.platrorm.type.dto';
import { PlatformTypeTranslateDTO } from 'src/app/modules/core/api-models/platforms/platform.translate.dto';
import { LocalizationHelper } from 'src/app/modules/core/helpers/localization.helper';
import { PlatformService } from 'src/app/modules/shared/services/platform/platform.service';

@Component({
  selector: 'app-add-platform',
  templateUrl: './add-platform.component.html',
})
export class AddPlatformComponent {
  public platformToAdd: AddPlatformTypeDTO;

  constructor(
    private platformService: PlatformService,
    private router: Router,
    private translateService: TranslateService
  ) {
    this.platformToAdd = new AddPlatformTypeDTO();
    this.platformToAdd.translations = LocalizationHelper.initialize(
      PlatformTypeTranslateDTO
    );
  }

  addPlatform() {
    this.platformService.addPlatform(this.platformToAdd).subscribe(() => {
      this.router.navigate(['/platforms']);
    });
  }
}
