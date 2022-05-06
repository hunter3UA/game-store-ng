import { Injectable } from '@angular/core';
import { Publisher } from '../api-models/publisher/publisher';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class PublisherAdapter implements Adapter<Publisher> {
  adapt(item: any): Publisher {
    return new Publisher(
      item.id,
      item.companyName,
      item.description,
      item.homePage
    );
  }
}
