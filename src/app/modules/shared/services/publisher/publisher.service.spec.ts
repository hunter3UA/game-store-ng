import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AddPublisherDTO } from 'src/app/modules/core/api-models/publisher/add.publisher.dto';
import { PublisherDTO } from 'src/app/modules/core/api-models/publisher/publisher.dto';
import { environment } from 'src/environments/environment';

import { PublisherService } from './publisher.service';

describe('PublisherService', () => {
  let service: PublisherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublisherService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PublisherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('addPublisher(publisherToAdd) should return added publisher', () => {
    const fakePublisher: AddPublisherDTO = {
      companyName: 'Company1',
      description: 'desc',
      homePage: 'My home page',
    };

    service.addPublisher(fakePublisher).subscribe((response) => {
      expect(typeof response).toBe(typeof new PublisherDTO());
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/publishers/new`
    );
    expect(request.request.method).toBe('POST');

    request.flush(new PublisherDTO());
  });

  it('getAllPublishers() shuld return array of publishers', () => {
    const fakePublishers: Array<PublisherDTO> = [
      {
        id: 1,
        companyName: 'Company1',
        description: 'desc',
        homePage: 'My home page',
      },
      {
        id: 2,
        companyName: 'Company2',
        description: 'desc',
        homePage: 'My home page1',
      },
    ];

    service.getAllPublishers().subscribe((response) => {
      expect(typeof response).toBe(typeof fakePublishers);
      expect(response.length).toBe(2);
    });

    const request = httpMock.expectOne(`${environment.apiBaseUrl}/publishers`);

    expect(request.request.method).toBe('GET');

    request.flush(fakePublishers);
  });

  it('getPublisher(id) should return publisher', () => {
    const fakePublisher: PublisherDTO = {
      id: 1,
      companyName: 'Company1',
      description: 'desc',
      homePage: 'My home page',
    };

    service.getPublisher(1).subscribe((response) => {
      expect(typeof response).toBe(typeof fakePublisher);
      expect(response.id).toEqual(fakePublisher.id);
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/publishers/1`
    );

    expect(request.request.method).toBe('GET');

    request.flush(fakePublisher);
  });

  it('removePublisher(id) should return true', () => {
    service.removePublisher(1).subscribe((response) => {
      expect(response).toBe(true);
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/publishers/remove/1`
    );

    expect(request.request.method).toBe('DELETE');

    request.flush(true);
  });

  it('updatePublisher(publisherToUpdate) should return updated publisher', () => {
    const fakePublisher: PublisherDTO = {
      id: 1,
      companyName: 'MyCompany',
      description: 'desc1',
      homePage: 'Page 1',
    };

    service.updatePublisher(fakePublisher).subscribe((response) => {
      expect(typeof response).toBe(typeof fakePublisher);
      expect(response.homePage).toBe(fakePublisher.homePage);
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/publishers/update`
    );

    expect(request.request.method).toBe('PUT');

    request.flush(fakePublisher);
  });
});
