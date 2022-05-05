import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  constructor(private http: HttpClient) {}

  getAllPublishers(): Observable<any> {
    let url = `${environment.apiBaseUrl}publishers`;
    return this.http.get(url);
  }
}
