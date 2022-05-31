import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublisherDTO } from 'src/app/modules/core/api-models/publisher/publisher.dto';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';

@Component({
  selector: 'app-update-publisher',
  templateUrl: './update-publisher.component.html',
})
export class UpdatePublisherComponent implements OnInit {
  public publisherId: number;
  public publisherToEdit: PublisherDTO;
  constructor(
    private publisherService: PublisherService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.publisherId = this.route.snapshot.params['id'];
    this.publisherToEdit = new PublisherDTO();
  }

  ngOnInit(): void {
    this.loadPublisher();
  }

  loadPublisher() {
    this.publisherService.getPublisher(this.publisherId).subscribe((data) => {
      if (data) {
        this.publisherToEdit = data;
      }
    });
  }

  updatePublisher() {
    this.publisherService
      .updatePublisher(this.publisherToEdit)
      .subscribe((data) => {
        this.router.navigate(['/publishers', this.publisherToEdit.id]);
      });
  }
}
