import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddGameModel } from '../../models/api-models/add.game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  deleteGame(id: number): Observable<any> {
    let url = `${environment.apiBaseUrl}games/remove/${id}`;
    return this.http.delete(url);
  }

  getAllGames(): Observable<any> {
    let url = `${environment.apiBaseUrl}games`;
    return this.http.get(url);
  }

  getGameByKey(key: string): Observable<any> {
    let url = `${environment.apiBaseUrl}game/${key}`;
    return this.http.get(url);
  }

  addGame(addGameModel: AddGameModel) {
    let url = `${environment.apiBaseUrl}games/new`;
    return this.http.post(url, addGameModel);
  }
}
