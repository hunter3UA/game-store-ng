import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PublisherAdapter } from 'src/app/modules/core/adapters/publisher.adapter';
import { AddPublisherDTO } from 'src/app/modules/core/api-models/publisher/add.publisher.dto';
import { PublisherDTO } from 'src/app/modules/core/api-models/publisher/publisher.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  constructor(
    private http: HttpClient,
    private publisherAdapter: PublisherAdapter
  ) {}

  addPublisher(publisherToAdd: AddPublisherDTO): Observable<PublisherDTO> {
    let url = `${environment.apiBaseUrl}/publishers/new`;
    return this.http
      .post(url, publisherToAdd)
      .pipe(map((item: any) => this.publisherAdapter.adapt(item)));
  }

  getAllPublishers(): Observable<PublisherDTO[]> {
    let url = `${environment.apiBaseUrl}/publishers`;
    return this.http
      .get(url)
      .pipe(
        map((data: any[]) =>
          data.map((item) => this.publisherAdapter.adapt(item))
        )
      );
  }

  getPublisher(publisherName: string): Observable<PublisherDTO> {
    let pubName = encodeURIComponent(publisherName);
    let url = `${environment.apiBaseUrl}/publishers/${pubName}`;
    return this.http
      .get(url)
      .pipe(map((item: any) => this.publisherAdapter.adapt(item)));
  }
  updatePublisher(publisherToUpdate: PublisherDTO): Observable<PublisherDTO> {
    let url = `${environment.apiBaseUrl}/publishers/update`;
    return this.http
      .put(url, publisherToUpdate)
      .pipe(map((item: any) => this.publisherAdapter.adapt(item)));
  }

  removePublisher(id: number): Observable<boolean> {
    let url = `${environment.apiBaseUrl}/publishers/remove/${id}`;
    return this.http.delete<boolean>(url);
  }
}
