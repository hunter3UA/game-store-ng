import { Injectable } from '@angular/core';
import { PublisherModel } from '../api-models/publisher/publisher.model';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class PublisherAdapter implements Adapter<PublisherModel> {
  adapt(item: any): PublisherModel {
    let publisher = new PublisherModel();
    publisher.id = item.id;
    publisher.companyName = item.companyName;
    publisher.description = item.description;
    publisher.homePage = item.homePage;
    return publisher;
  }
}
