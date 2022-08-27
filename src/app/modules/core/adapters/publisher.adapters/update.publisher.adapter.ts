import { Injectable } from '@angular/core';
import { PublisherDTO } from '../../api-models/publisher/publisher.dto';
import { UpdatePublisherDTO } from '../../api-models/publisher/update.publisher.dto';
import { Adapter } from '../adapter';

@Injectable({ providedIn: 'root' })
export class UpdatePublisherAdapter implements Adapter<PublisherDTO> {
  adapt(item: any): UpdatePublisherDTO {
    let publisher = new UpdatePublisherDTO();
    publisher.id = item.id;
    publisher.oldCompanyName = item.companyName;
    publisher.companyName = item.companyName;
    publisher.description = item.description;
    publisher.homePage = item.homePage;
    publisher.typeOfBase = item.typeOfBase;
    publisher.contactName = item.contactName;
    publisher.contactTitle = item.contactTitle;
    publisher.country = item.country;
    publisher.region = item.region;
    publisher.city = item.city;
    publisher.fax = item.fax;
    publisher.phone = item.phone;
    publisher.postalCode = item.postalCode;
    publisher.address = item.address;

    return publisher;
  }
}
