import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatformComponent } from './pages/add-platform/add-platform.component';
import { AllPlatformsComponent } from './pages/all-platforms/all-platforms.component';
import { UpdatePlatformComponent } from './pages/update-platform/update-platform.component';

const routes: Routes = [
  { path: '', component: AllPlatformsComponent },
  { path: 'new', component: AddPlatformComponent },
  { path: 'update/:id', component: UpdatePlatformComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformTypeRoutingModule {}
