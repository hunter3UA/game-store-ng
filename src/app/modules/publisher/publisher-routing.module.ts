import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from '../core/enums/role';
import { AuthGuard } from '../root/guards/auth/auth.guard';
import { PublisherUpdateGuard } from '../root/guards/publisher/publisher-update.guard';
import { RoleGuard } from '../root/guards/role/role.guard';
import { AddPublisherComponent } from './pages/add-publisher/add-publisher.component';
import { AllPublishersComponent } from './pages/all-publishers/all-publishers.component';
import { PublisherDetailsComponent } from './pages/publisher-details/publisher-details.component';
import { UpdatePublisherComponent } from './pages/update-publisher/update-publisher.component';

const routes: Routes = [
  { path: '', component: AllPublishersComponent },
  {
    path: 'new',
    component: AddPublisherComponent,
    canActivate: [RoleGuard],
    data: { roles: [Role.Admin, Role.Manager] },
  },
  { path: ':name', component: PublisherDetailsComponent },
  {
    path: 'update/:name',
    component: UpdatePublisherComponent,
    // canActivate: [PublisherUpdateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublisherRoutingModule {}
