import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublisherRoutingModule } from './publisher-routing.module';
import { AllPublishersComponent } from './pages/all-publishers/all-publishers.component';
import { AddPublisherComponent } from './pages/add-publisher/add-publisher.component';
import { PublisherDetailsComponent } from './pages/publisher-details/publisher-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllPublishersComponent,
    AddPublisherComponent,
    PublisherDetailsComponent,
  ],
  imports: [CommonModule, PublisherRoutingModule, FormsModule],
})
export class PublisherModule {}
