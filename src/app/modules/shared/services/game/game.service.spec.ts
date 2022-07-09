import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AddGameDTO } from 'src/app/modules/core/api-models/game/add.game.dto';
import { EditGameDTO } from 'src/app/modules/core/api-models/game/edit.game.dto';
import { GameDTO } from 'src/app/modules/core/api-models/game/game.dto';
import { GenreDTO } from 'src/app/modules/core/api-models/genre/genre.dto';
import { PlatformTypeDTO } from 'src/app/modules/core/api-models/platforms/platform.type.dto';
import { PublisherDTO } from 'src/app/modules/core/api-models/publisher/publisher.dto';
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
    const fakeAddGame: AddGameDTO = {
      key: 'key',
      name: 'test game',
      description: 'desc',
      genresId: [1, 2],
      platformsId: [1],
      publisherName: 1,
      price: 100,
      discontinued: false,
      unitsInStock: 10,
    };
    const mockResponse = new GameDTO();

    service.addGame(fakeAddGame).subscribe((game) => {
      expect(typeof game).toEqual(typeof mockResponse);
    });

    const request = httpMock.expectOne(`${environment.apiBaseUrl}/games/new`);

    expect(request.request.method).toBe('POST');

    request.flush(mockResponse);
  });

  it('getAllGames() should return array of games', () => {
    const fakeGames: Array<GameDTO> = [
      {
        id: 1,
        name: 'test game',
        key: 'test-game',
        description: 'desc',
        genres: new Array<GenreDTO>(),
        platformTypes: new Array<PlatformTypeDTO>(),
        publisher: new PublisherDTO(),
        price: 100,
        discontinued: false,
        unitsInStock: 10,
      },
      {
        id: 2,
        name: 'test game2',
        key: 'test-game-2',
        description: 'desc2',
        genres: new Array<GenreDTO>(),
        platformTypes: new Array<PlatformTypeDTO>(),
        publisher: new PublisherDTO(),
        price: 100,
        discontinued: false,
        unitsInStock: 10,
      },
    ];

    service.getAllGames().subscribe((games) => {
      expect(games.length).toBe(2),
        expect(typeof games).toEqual(typeof Array<GameDTO>());
    });

    const request = httpMock.expectOne(`${environment.apiBaseUrl}/games`);
    expect(request.request.method).toBe('GET');

    request.flush(fakeGames);
  });

  it('getGameByKey(key) should return game', () => {
    const fakeGame: GameDTO = {
      id: 1,
      name: 'test game',
      key: 'test-game',
      description: 'desc',
      genres: new Array<GenreDTO>(),
      platformTypes: new Array<PlatformTypeDTO>(),
      publisher: new PublisherDTO(),
      price: 100,
      discontinued: false,
      unitsInStock: 10,
    };

    service.getGameByKey('test-game').subscribe((game) => {
      expect(typeof game).toBe(typeof fakeGame);
      expect(game.id).toEqual(fakeGame.id);
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/games/test-game`
    );

    expect(request.request.method).toBe('GET');

    request.flush(fakeGame);
  });

  it('updateGame() should return updated game', () => {
    const fakeGame: EditGameDTO = {
      id: 1,
      name: 'test',
      key: 'key',
      price: 100,
      discontinued: false,
      unitsInStock: 0,
      genresId: [1, 2, 3],
      platformsId: [1, 2],
      publisherName: 1,
      description: 'desc',
    };

    const mockGame = new GameDTO();

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
