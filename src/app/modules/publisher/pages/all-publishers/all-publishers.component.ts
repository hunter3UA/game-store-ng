import { Component, OnInit } from '@angular/core';
import { Publisher } from 'src/app/modules/core/api-models/publisher/publisher';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';

@Component({
  selector: 'app-all-publishers',
  templateUrl: './all-publishers.component.html',
})
export class AllPublishersComponent implements OnInit {
  publishers: Array<Publisher>;

  constructor(private publisherService: PublisherService) {}

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
