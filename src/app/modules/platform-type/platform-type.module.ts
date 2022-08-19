import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformTypeRoutingModule } from './platform-type-routing.module';
import { AllPlatformsComponent } from './pages/all-platforms/all-platforms.component';
import { AddPlatformComponent } from './pages/add-platform/add-platform.component';
import { FormsModule } from '@angular/forms';
import { UpdatePlatformComponent } from './pages/update-platform/update-platform.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AllPlatformsComponent,
    AddPlatformComponent,
    UpdatePlatformComponent,
  ],
  imports: [CommonModule, PlatformTypeRoutingModule, FormsModule, SharedModule],
})
export class PlatformTypeModule {}
