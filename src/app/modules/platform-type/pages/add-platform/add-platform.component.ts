import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformTypeModel } from 'src/app/modules/core/api-models/platforms/platform.type.model';
import { PlatformService } from 'src/app/modules/shared/services/platform/platform.service';

@Component({
  selector: 'app-add-platform',
  templateUrl: './add-platform.component.html',
})
export class AddPlatformComponent {
  public platformToAdd: PlatformTypeModel;
  constructor(
    private platformService: PlatformService,
    private router: Router
  ) {
    this.platformToAdd = new PlatformTypeModel();
  }

  addPlatform() {
    this.platformService.addPlatform(this.platformToAdd).subscribe(() => {
      this.router.navigate(['/platforms']);
    });
  }
}
