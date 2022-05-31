import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameAdapter } from 'src/app/modules/core/adapters/game.adapters/game.adapter';
import { GameDTO } from 'src/app/modules/core/api-models/game/game.dto';
import { environment } from 'src/environments/environment';
import { AddGameDTO } from '../../../core/api-models/game/add.game.dto';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public totalGames: number;

  constructor(private http: HttpClient, private gameAdapter: GameAdapter) {
    this.totalGames = 0;
  }

  deleteGame(id: number): Observable<boolean> {
    let url = `${environment.apiBaseUrl}/games/remove/${id}`;
    return this.http.delete<boolean>(url);
  }

  getAllGames(): Observable<GameDTO[]> {
    let url = `${environment.apiBaseUrl}/games`;
    return this.http
      .get(url)
      .pipe(
        map((data: any[]) => data.map((item) => this.gameAdapter.adapt(item)))
      );
  }

  getTotalGames(): Observable<any> {
    let url = `${environment.apiBaseUrl}/games`;
    return this.http.get<GameDTO[]>(url);
  }

  getGameByKey(key: string): Observable<GameDTO> {
    let url = `${environment.apiBaseUrl}/game/${key}`;
    return this.http
      .get(url)
      .pipe(map((data: any) => this.gameAdapter.adapt(data)));
  }

  addGame(addGameModel: AddGameDTO): Observable<GameDTO> {
    let url = `${environment.apiBaseUrl}/games/new`;
    return this.http
      .post(url, addGameModel)
      .pipe(map((item: any) => this.gameAdapter.adapt(item)));
  }

  updateGame(updateGameModel: any): Observable<any> {
    let url = `${environment.apiBaseUrl}/games/update`;
    return this.http.put(url, updateGameModel);
  }

  downloadGame(gameKey: string): Observable<any> {
    let url = `${environment.apiBaseUrl}/games/${gameKey}/download`;
    return this.http.get(url, {
      headers: new HttpHeaders({ 'Access-Control-Expose-Headers': '*' }),
      observe: 'response',
      responseType: 'blob',
    });
  }
}
