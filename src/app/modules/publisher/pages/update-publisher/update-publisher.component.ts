import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatePublisherAdapter } from 'src/app/modules/core/adapters/publisher.adapters/update.publisher.adapter';
import { PublisherDTO } from 'src/app/modules/core/api-models/publisher/publisher.dto';
import { UpdatePublisherDTO } from 'src/app/modules/core/api-models/publisher/update.publisher.dto';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';

@Component({
  selector: 'app-update-publisher',
  templateUrl: './update-publisher.component.html',
})
export class UpdatePublisherComponent implements OnInit {
  public publisherName: string;
  public publisherToEdit: UpdatePublisherDTO;
  constructor(
    private publisherService: PublisherService,
    private route: ActivatedRoute,
    private router: Router,
    private errorService: ErrorHandlerService,
    private updatePublisherAdapter: UpdatePublisherAdapter
  ) {
    this.publisherName = this.route.snapshot.params['name'];
    this.publisherToEdit = new UpdatePublisherDTO();
  }

  ngOnInit(): void {
    this.loadPublisher();
  }

  loadPublisher() {
    this.publisherService.getPublisher(this.publisherName).subscribe({
      next: (data) =>
        (this.publisherToEdit = this.updatePublisherAdapter.adapt(data)),
      error: (error) => {
        this.errorService.handleError(error);
      },
    });
  }

  updatePublisher() {
    this.publisherService
      .updatePublisher(this.publisherToEdit)
      .subscribe(() => {
        this.router.navigate(['/publishers', this.publisherToEdit.companyName]);
      });
  }
}
