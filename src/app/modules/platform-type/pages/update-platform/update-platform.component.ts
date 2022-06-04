import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformTypeDTO } from 'src/app/modules/core/api-models/platforms/platform.type.dto';
import { PlatformService } from 'src/app/modules/shared/services/platform/platform.service';

@Component({
  selector: 'app-update-platform',
  templateUrl: './update-platform.component.html',
})
export class UpdatePlatformComponent implements OnInit {
  public platformId: number;
  public platformToEdit: PlatformTypeDTO;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private platformService: PlatformService
  ) {
    this.platformId = this.route.snapshot.params['id'];
    this.platformToEdit = new PlatformTypeDTO();
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
