import { Injectable } from '@angular/core';
import { Publisher } from '../api-models/publisher/publisher';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class PublisherAdapter implements Adapter<Publisher> {
  adapt(item: any): Publisher {
    let publisher = new Publisher();
    publisher.id = item.id;
    publisher.companyName = item.companyName;
    publisher.description = item.description;
    publisher.homePage = item.homePage;
    return publisher;
  }
}
