import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PublisherAdapter } from 'src/app/modules/core/adapters/publisher.adapter';
import { AddPublisher } from 'src/app/modules/core/api-models/publisher/add.publisher';
import { Publisher } from 'src/app/modules/core/api-models/publisher/publisher';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  constructor(
    private http: HttpClient,
    private publisherAdapter: PublisherAdapter
  ) {}

  addPublisher(publisherToAdd: AddPublisher): Observable<Publisher> {
    let url = `${environment.apiBaseUrl}publishers/new`;
    return this.http
      .post(url, publisherToAdd)
      .pipe(map((item: any) => this.publisherAdapter.adapt(item)));
  }

  getAllPublishers(): Observable<Publisher[]> {
    let url = `${environment.apiBaseUrl}publishers`;
    return this.http
      .get(url)
      .pipe(
        map((data: any[]) =>
          data.map((item) => this.publisherAdapter.adapt(item))
        )
      );
  }

  getPublisher(id: number): Observable<Publisher> {
    let url = `${environment.apiBaseUrl}publishers/${id}`;
    return this.http
      .get(url)
      .pipe(map((item: any) => this.publisherAdapter.adapt(item)));
  }
  updatePublisher(publisherToUpdate: Publisher): Observable<Publisher> {
    let url = `${environment.apiBaseUrl}publishers/update`;
    return this.http
      .put(url, publisherToUpdate)
      .pipe(map((item: any) => this.publisherAdapter.adapt(item)));
  }

  removePublisher(id: number): Observable<any> {
    let url = `${environment.apiBaseUrl}publishers/remove/${id}`;
    return this.http.delete(url);
  }
}
