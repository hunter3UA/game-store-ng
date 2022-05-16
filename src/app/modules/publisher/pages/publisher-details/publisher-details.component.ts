import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublisherModel } from 'src/app/modules/core/api-models/publisher/publisher.model';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
})
export class PublisherDetailsComponent implements OnInit {
  publisherId: number;
  currentPublisher: PublisherModel;
  constructor(
    private publisherService: PublisherService,
    private route: ActivatedRoute
  ) {
    this.publisherId = this.route.snapshot.params['id'];
    this.currentPublisher = new PublisherModel();
  }

  ngOnInit(): void {
    this.loadPublisher();
  }

  loadPublisher() {
    this.publisherService.getPublisher(this.publisherId).subscribe((data) => {
      if (data) {
        this.currentPublisher = data;
      }
    });
  }
}
