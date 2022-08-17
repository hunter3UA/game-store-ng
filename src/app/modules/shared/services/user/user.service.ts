import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateUserDTO } from 'src/app/modules/core/api-models/user/update.user.dto';
import { UserDTO } from 'src/app/modules/core/api-models/user/user.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getListOfUsers(): Observable<Array<UserDTO>> {
    let url = `${environment.apiBaseUrl}/users`;
    return this.http.get<Array<UserDTO>>(url);
  }

  public getUser(userName: string): Observable<UserDTO> {
    let url = `${environment.apiBaseUrl}/users/${userName}`;
    return this.http.get<UserDTO>(url);
  }

  public updateUser(updateUserDTO: UpdateUserDTO): Observable<UserDTO> {
    let url = `${environment.apiBaseUrl}/users`;
    return this.http.put<UserDTO>(url, updateUserDTO);
  }

  public banUser(): Observable<any> {
    let url = `${environment.apiBaseUrl}/users/ban`;
    return this.http.get(url);
  }
}
