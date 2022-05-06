import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPublisherComponent } from './pages/add-publisher/add-publisher.component';
import { AllPublishersComponent } from './pages/all-publishers/all-publishers.component';

const routes: Routes = [
  { path: 'publishers', component: AllPublishersComponent },
  { path: 'publishers/new', component: AddPublisherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublisherRoutingModule {}
