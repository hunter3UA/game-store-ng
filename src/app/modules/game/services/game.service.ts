import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }


  deleteGame(id:number):Observable<any>{
    let url=`${environment.apiBaseUrl}games/remove/${id}`;
    return this.http.delete(url);
  }

  getAllGames():Observable<any>{
    let url=`${environment.apiBaseUrl}games`;
    return this.http.get(url);
  }
}
