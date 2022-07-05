import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublisherDTO } from 'src/app/modules/core/api-models/publisher/publisher.dto';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
})
export class PublisherDetailsComponent implements OnInit {
  public publisherName: string;
  public currentPublisher: PublisherDTO;
  constructor(
    private publisherService: PublisherService,
    private route: ActivatedRoute
  ) {
    this.publisherName = this.route.snapshot.params['name'];
    this.currentPublisher = new PublisherDTO();
  }

  ngOnInit(): void {
    this.loadPublisher();
  }

  loadPublisher() {
    this.publisherService.getPublisher(this.publisherName).subscribe((data) => {
      if (data) {
        this.currentPublisher = data;
      }
    });
  }
}
