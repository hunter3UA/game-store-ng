import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformTypeRoutingModule } from './platform-type-routing.module';
import { AllPlatformsComponent } from './pages/all-platforms/all-platforms.component';
import { AddPlatformComponent } from './pages/add-platform/add-platform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllPlatformsComponent, AddPlatformComponent],
  imports: [CommonModule, PlatformTypeRoutingModule, FormsModule],
})
export class PlatformTypeModule {}
