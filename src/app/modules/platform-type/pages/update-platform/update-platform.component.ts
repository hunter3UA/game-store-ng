import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformType } from 'src/app/modules/core/api-models/platforms/platform.type';
import { PlatformService } from 'src/app/modules/shared/services/platform/platform.service';

@Component({
  selector: 'app-update-platform',
  templateUrl: './update-platform.component.html',
})
export class UpdatePlatformComponent implements OnInit {
  platformId: number;
  platformToEdit: PlatformType;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private platformService: PlatformService
  ) {
    this.platformId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadPlatform();
  }

  loadPlatform() {
    this.platformService.getPlatform(this.platformId).subscribe((data) => {
      if (data) {
        this.platformToEdit = data;
      }
    });
  }

  updatePlatform() {
    this.platformService.updatePlatform(this.platformToEdit).subscribe(() => {
      this.router.navigate(['/platforms']);
    });
  }
}
