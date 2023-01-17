import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PlatformTypeDTO } from 'src/app/modules/core/api-models/platforms/platform.type.dto';
import { PlatformService } from 'src/app/modules/shared/services/platform/platform.service';

@Component({
  selector: 'app-all-platforms',
  templateUrl: './all-platforms.component.html',
})
export class AllPlatformsComponent implements OnInit {
  public platforms: Array<PlatformTypeDTO>;

  constructor(
    private platformService: PlatformService,
    public translateService: TranslateService
  ) {
    this.platforms = new Array<PlatformTypeDTO>();
  }

  ngOnInit() {
    this.loadPlatforms();
  }

  loadPlatforms() {
    this.platformService.getAllPlatforms().subscribe((data) => {
      this.platforms = data;
    });
  }

  removePlatform(id: number) {
    this.platformService.removePlatform(id).subscribe((data) => {
      this.loadPlatforms();
    });
  }
}
