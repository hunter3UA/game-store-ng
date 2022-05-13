import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publisher } from 'src/app/modules/core/api-models/publisher/publisher';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
})
export class PublisherDetailsComponent implements OnInit {
  publisherId: number;
  currentPublisher: Publisher;
  constructor(
    private publisherService: PublisherService,
    private route: ActivatedRoute
  ) {
    this.publisherId = this.route.snapshot.params['id'];
    this.currentPublisher = new Publisher();
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
