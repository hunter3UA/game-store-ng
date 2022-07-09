import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublisherDTO } from 'src/app/modules/core/api-models/publisher/publisher.dto';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';

@Component({
  selector: 'app-update-publisher',
  templateUrl: './update-publisher.component.html',
})
export class UpdatePublisherComponent implements OnInit {
  public publisherName: string;
  public publisherToEdit: PublisherDTO;
  constructor(
    private publisherService: PublisherService,
    private route: ActivatedRoute,
    private router: Router,
    private errorService: ErrorHandlerService
  ) {
    this.publisherName = this.route.snapshot.params['name'];
    console.log(this.publisherName);
    this.publisherToEdit = new PublisherDTO();
  }

  ngOnInit(): void {
    this.loadPublisher();
  }

  loadPublisher() {
    this.publisherService.getPublisher(this.publisherName).subscribe({
      next: (data) => (this.publisherToEdit = data),
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
