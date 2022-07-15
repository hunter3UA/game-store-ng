import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublisherDTO } from 'src/app/modules/core/api-models/publisher/publisher.dto';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
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
    private route: ActivatedRoute,
    private errorService: ErrorHandlerService
  ) {
    this.publisherName = this.route.snapshot.params['name'];

    this.currentPublisher = new PublisherDTO();
  }

  ngOnInit(): void {
    this.loadPublisher();
  }

  loadPublisher() {
    console.log(this.publisherName);

    this.publisherService.getPublisher(this.publisherName).subscribe({
      next: (data) => {
        this.currentPublisher = data;
      },
      error: (error) => {
        this.errorService.handleError(error);
      },
    });
  }
}
