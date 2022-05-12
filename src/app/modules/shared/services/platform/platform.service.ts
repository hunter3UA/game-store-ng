import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PlatformType } from 'src/app/modules/core/api-models/platforms/platform.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  constructor(private http: HttpClient) {}

  addPlatform(platformToAdd: PlatformType) {
    let url = `${environment.apiBaseUrl}platformTypes/add`;
    return this.http.post(url, platformToAdd);
  }

  getAllPlatforms(): Observable<any> {
    let url = `${environment.apiBaseUrl}platformTypes`;
    return this.http.get(url);
  }

  getPlatform(id): Observable<any> {
    let url = `${environment.apiBaseUrl}platformTypes/${id}`;
    return this.http.get(url);
  }
  updatePlatform(platformToUpdate: PlatformType): Observable<any> {
    let url = `${environment.apiBaseUrl}platformTypes/update`;
    return this.http.put(url, platformToUpdate);
  }

  removePlatform(id: number): Observable<any> {
    let url = `${environment.apiBaseUrl}platformTypes/remove/${id}`;
    return this.http.delete(url).pipe(map((data: any) => data.text));
  }
}
