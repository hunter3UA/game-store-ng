import { Injectable } from '@angular/core';
import { PublisherDTO } from '../api-models/publisher/publisher.dto';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class PublisherAdapter implements Adapter<PublisherDTO> {
  adapt(item: any): PublisherDTO {
    let publisher = new PublisherDTO();
    publisher.id = item.id == 0 ? item.objectId : item.id;
    publisher.companyName = item.companyName;
    publisher.description = item.description;
    publisher.homePage = item.homePage;
    publisher.typeOfBase = item.typeOfBase;

    return publisher;
  }
}
