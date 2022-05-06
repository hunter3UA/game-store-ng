import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
})
export class AddPublisherComponent implements OnInit {
  publisherToAdd: any;

  constructor(
    private publisherService: PublisherService,
    private router: Router
  ) {
    this.publisherToAdd = {};
  }

  ngOnInit(): void {}

  addPublisher() {
    console.log(this.publisherToAdd);
    this.publisherService
      .addPublisher(this.publisherToAdd)
      .subscribe((response) => {
        if (response) {
          this.router.navigate(['/publishers']);
        }
      });
  }
}
