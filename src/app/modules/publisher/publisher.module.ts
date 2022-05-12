import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublisherRoutingModule } from './publisher-routing.module';
import { AllPublishersComponent } from './pages/all-publishers/all-publishers.component';
import { AddPublisherComponent } from './pages/add-publisher/add-publisher.component';
import { PublisherDetailsComponent } from './pages/publisher-details/publisher-details.component';
import { FormsModule } from '@angular/forms';
import { UpdatePublisherComponent } from './pages/update-publisher/update-publisher.component';

@NgModule({
  declarations: [
    AllPublishersComponent,
    AddPublisherComponent,
    PublisherDetailsComponent,
    UpdatePublisherComponent,
  ],
  imports: [CommonModule, PublisherRoutingModule, FormsModule],
})
export class PublisherModule {}
