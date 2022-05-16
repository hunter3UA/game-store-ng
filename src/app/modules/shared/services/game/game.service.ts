import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameAdapter } from 'src/app/modules/core/adapters/game.adapters/game.adapter';
import { Game } from 'src/app/modules/core/api-models/game/game';
import { environment } from 'src/environments/environment';
import { AddGameModel } from '../../../core/api-models/game/add.game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient, private gameAdapter: GameAdapter) {}

  deleteGame(id: number): Observable<any> {
    let url = `${environment.apiBaseUrl}games/remove/${id}`;
    return this.http.delete(url);
  }

  getAllGames(): Observable<Game[]> {
    let url = `${environment.apiBaseUrl}games`;
    return this.http
      .get(url)
      .pipe(
        map((data: any[]) => data.map((item) => this.gameAdapter.adapt(item)))
      );
  }

  getGameByKey(key: string): Observable<Game> {
    let url = `${environment.apiBaseUrl}game/${key}`;
    return this.http
      .get(url)
      .pipe(map((data: any) => this.gameAdapter.adapt(data)));
  }

  addGame(addGameModel: AddGameModel): Observable<Game> {
    let url = `${environment.apiBaseUrl}games/new`;
    return this.http
      .post(url, addGameModel)
      .pipe(map((item: any) => this.gameAdapter.adapt(item)));
  }

  updateGame(updateGameModel: any): Observable<any> {
    let url = `${environment.apiBaseUrl}games/update`;
    return this.http.put(url, updateGameModel);
  }

  downloadGame(gameKey: string): Observable<any> {
    let url = `${environment.apiBaseUrl}games/${gameKey}/download`;
    return this.http.get(url, {
      headers: new HttpHeaders({ 'Access-Control-Expose-Headers': '*' }),
      observe: 'response',
      responseType: 'blob',
    });
  }
}
