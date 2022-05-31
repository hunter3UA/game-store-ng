import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddPublisherDTO } from 'src/app/modules/core/api-models/publisher/add.publisher.dto';
import { PublisherDTO } from 'src/app/modules/core/api-models/publisher/publisher.dto';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
})
export class AddPublisherComponent {
  public publisherToAdd: AddPublisherDTO;

  constructor(
    private publisherService: PublisherService,
    private router: Router
  ) {
    this.publisherToAdd = new PublisherDTO();
  }

  addPublisher() {
    this.publisherService
      .addPublisher(this.publisherToAdd)
      .subscribe((response) => {
        if (response) {
          this.router.navigate(['/publishers']);
        }
      });
  }
}
