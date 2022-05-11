import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatformComponent } from './pages/add-platform/add-platform.component';
import { AllPlatformsComponent } from './pages/all-platforms/all-platforms.component';

const routes: Routes = [
  { path: 'all', component: AllPlatformsComponent },
  { path: 'new', component: AddPlatformComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformTypeRoutingModule {}
