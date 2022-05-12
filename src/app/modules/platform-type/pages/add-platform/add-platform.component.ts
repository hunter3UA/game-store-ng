import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformType } from 'src/app/modules/core/api-models/platforms/platform.type';
import { PlatformService } from 'src/app/modules/shared/services/platform/platform.service';

@Component({
  selector: 'app-add-platform',
  templateUrl: './add-platform.component.html',
})
export class AddPlatformComponent implements OnInit {
  platformToAdd: PlatformType;
  constructor(
    private platformService: PlatformService,
    private router: Router
  ) {
    this.platformToAdd = new PlatformType();
  }

  ngOnInit(): void {}

  addPlatform() {
    this.platformService.addPlatform(this.platformToAdd).subscribe(() => {
      this.router.navigate(['/platforms']);
    });
  }
}
