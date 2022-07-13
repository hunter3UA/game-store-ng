import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipperDTO } from 'src/app/modules/core/api-models/shipper/shipper.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShipperService {
  constructor(private http: HttpClient) {}

  getListOfShippers(): Observable<Array<ShipperDTO>> {
    let url = `${environment.apiBaseUrl}/shippers`;
    return this.http.get<Array<ShipperDTO>>(url);
  }
}
