import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AddGameModel } from 'src/app/modules/core/api-models/game/add.game.model';
import { EditGameModel } from 'src/app/modules/core/api-models/game/edit.game.model';
import { GameModel } from 'src/app/modules/core/api-models/game/game.model';
import { GenreModel } from 'src/app/modules/core/api-models/genre/genre.model';
import { PlatformTypeModel } from 'src/app/modules/core/api-models/platforms/platform.type.model';
import { PublisherModel } from 'src/app/modules/core/api-models/publisher/publisher.model';
import { environment } from 'src/environments/environment';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GameService],
    });
    service = TestBed.inject(GameService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('addGame() should return added game', () => {
    const fakeAddGame: AddGameModel = {
      key: 'key',
      name: 'test game',
      description: 'desc',
      genresId: [1, 2],
      platformsId: [1],
      publisherId: 1,
      price: 100,
      discontinued: false,
      unitsInStock: 10,
    };
    const mockResponse = new GameModel();

    service.addGame(fakeAddGame).subscribe((game) => {
      expect(typeof game).toEqual(typeof mockResponse);
    });

    const request = httpMock.expectOne(`${environment.apiBaseUrl}/games/new`);

    expect(request.request.method).toBe('POST');

    request.flush(mockResponse);
  });

  it('getAllGames() should return array of games', () => {
    const fakeGames: Array<GameModel> = [
      {
        id: 1,
        name: 'test game',
        key: 'test-game',
        description: 'desc',
        genres: new Array<GenreModel>(),
        platformTypes: new Array<PlatformTypeModel>(),
        publisher: new PublisherModel(),
        price: 100,
        discontinued: false,
        unitsInStock: 10,
      },
      {
        id: 2,
        name: 'test game2',
        key: 'test-game-2',
        description: 'desc2',
        genres: new Array<GenreModel>(),
        platformTypes: new Array<PlatformTypeModel>(),
        publisher: new PublisherModel(),
        price: 100,
        discontinued: false,
        unitsInStock: 10,
      },
    ];

    service.getAllGames().subscribe((games) => {
      expect(games.length).toBe(2),
        expect(typeof games).toEqual(typeof Array<GameModel>());
    });

    const request = httpMock.expectOne(`${environment.apiBaseUrl}/games`);
    expect(request.request.method).toBe('GET');

    request.flush(fakeGames);
  });

  it('getGameByKey(key) should return game', () => {
    const fakeGame: GameModel = {
      id: 1,
      name: 'test game',
      key: 'test-game',
      description: 'desc',
      genres: new Array<GenreModel>(),
      platformTypes: new Array<PlatformTypeModel>(),
      publisher: new PublisherModel(),
      price: 100,
      discontinued: false,
      unitsInStock: 10,
    };

    service.getGameByKey('test-game').subscribe((game) => {
      expect(typeof game).toBe(typeof fakeGame);
      expect(game.id).toEqual(fakeGame.id);
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/game/test-game`
    );

    expect(request.request.method).toBe('GET');

    request.flush(fakeGame);
  });

  it('updateGame() should return updated game', () => {
    const fakeGame: EditGameModel = {
      id: 1,
      name: 'test',
      key: 'key',
      price: 100,
      discontinued: false,
      unitsInStock: 0,
      genres: [1, 2, 3],
      platforms: [1, 2],
      publisherId: 1,
      description: 'desc',
    };

    const mockGame = new GameModel();

    service.updateGame(fakeGame).subscribe((response) => {
      expect(typeof response).toBe(typeof mockGame);
      expect(response).not.toBeNull();
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/games/update`
    );

    expect(request.request.method).toBe('PUT');

    request.flush(mockGame);
  });

  it('deleteGame(id) should return true if game has been deleted', () => {
    service.deleteGame(1).subscribe((response) => {
      expect(response).toBe(true);
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/games/remove/1`
    );
    expect(request.request.method).toBe('DELETE');

    request.flush(true);
  });
});
