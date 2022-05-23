import { Component, OnInit } from '@angular/core';
import { PublisherModel } from 'src/app/modules/core/api-models/publisher/publisher.model';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';

@Component({
  selector: 'app-all-publishers',
  templateUrl: './all-publishers.component.html',
})
export class AllPublishersComponent implements OnInit {
  public publishers: Array<PublisherModel>;

  constructor(private publisherService: PublisherService) {
    this.publishers = new Array<PublisherModel>();
  }

  ngOnInit(): void {
    this.loadPublishers();
  }

  loadPublishers() {
    this.publisherService.getAllPublishers().subscribe((data) => {
      if (data) {
        this.publishers = data;
        console.log(this.publishers);
      }
    });
  }
  removePublisher(id: number) {
    console.log(id);
    this.publisherService.removePublisher(id).subscribe((response) => {
      this.loadPublishers();
    });
  }
}
