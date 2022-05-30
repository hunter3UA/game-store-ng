import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformService } from 'src/app/modules/shared/services/platform/platform.service';

@Component({
  selector: 'app-add-platform',
  templateUrl: './add-platform.component.html',
})
export class AddPlatformComponent {
  public typeOfPlatform: string;

  constructor(
    private platformService: PlatformService,
    private router: Router
  ) {
    this.typeOfPlatform = '';
  }

  addPlatform() {
    this.platformService.addPlatform(this.typeOfPlatform).subscribe(() => {
      this.router.navigate(['/platforms']);
    });
  }
}
