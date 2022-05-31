import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PlatformAdapter } from 'src/app/modules/core/adapters/platform.adapter';
import { PlatformTypeDTO } from 'src/app/modules/core/api-models/platforms/platform.type.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  constructor(
    private http: HttpClient,
    private platformAdapter: PlatformAdapter
  ) {}

  addPlatform(type: string): Observable<PlatformTypeDTO> {
    let url = `${environment.apiBaseUrl}/platformTypes/add`;
    return this.http
      .post(url, { type: type })
      .pipe(map((data: any) => this.platformAdapter.adapt(data)));
  }

  getAllPlatforms(): Observable<PlatformTypeDTO[]> {
    let url = `${environment.apiBaseUrl}/platformTypes`;
    return this.http
      .get(url)
      .pipe(
        map((data: any[]) =>
          data.map((item) => this.platformAdapter.adapt(item))
        )
      );
  }

  getPlatform(id): Observable<PlatformTypeDTO> {
    let url = `${environment.apiBaseUrl}/platformTypes/${id}`;
    return this.http
      .get(url)
      .pipe(map((data: any) => this.platformAdapter.adapt(data)));
  }

  updatePlatform(
    platformToUpdate: PlatformTypeDTO
  ): Observable<PlatformTypeDTO> {
    let url = `${environment.apiBaseUrl}/platformTypes/update`;
    return this.http
      .put(url, platformToUpdate)
      .pipe(map((data: any) => this.platformAdapter.adapt(data)));
  }

  removePlatform(id: number): Observable<boolean> {
    let url = `${environment.apiBaseUrl}/platformTypes/remove/${id}`;
    return this.http.delete<boolean>(url);
  }
}
