import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PlatformTypeDTO } from 'src/app/modules/core/api-models/platforms/platform.type.dto';
import { environment } from 'src/environments/environment';

import { PlatformService } from './platform.service';

describe('PlatformService', () => {
  let service: PlatformService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlatformService],
    });
    service = TestBed.inject(PlatformService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('addPlatform() should return added platform', () => {
    const typeName = 'MyFakeType';

    service.addPlatform(typeName).subscribe((response) => {
      expect(typeof response).toBe(typeof new PlatformTypeDTO());
      expect(response).not.toBeNull();
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/platformTypes/add`
    );

    expect(request.request.method).toBe('POST');

    request.flush(new PlatformTypeDTO());
  });

  it('updatePlatform() should return updated platform', () => {
    const fakePlatform: PlatformTypeDTO = {
      id: 1,
      type: 'MyFakeUpdatedType',
    };

    service.updatePlatform(fakePlatform).subscribe((response) => {
      expect(typeof response).toBe(typeof fakePlatform);
      expect(response.id).toBe(fakePlatform.id);
    });
    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/platformTypes/update`
    );

    expect(request.request.method).toBe('PUT');

    request.flush(fakePlatform);
  });

  it('getPlatform(id) should return platform', () => {
    const fakePlatform: PlatformTypeDTO = {
      id: 1,
      type: 'Test',
    };

    service.getPlatform(1).subscribe((response) => {
      expect(typeof response).toBe(typeof fakePlatform);
      expect(fakePlatform).not.toBeNull();
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/platformTypes/1`
    );

    expect(request.request.method).toBe('GET');

    request.flush(fakePlatform);
  });

  it('getAllPlatforms() should return array of platforms', () => {
    const fakePlatforms: Array<PlatformTypeDTO> = [
      { id: 1, type: 'Platform 1' },
      { id: 2, type: 'Platform 2' },
    ];

    service.getAllPlatforms().subscribe((platforms) => {
      expect(typeof platforms).toBe(typeof fakePlatforms);
      expect(platforms.length).toBe(2);
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/platformTypes`
    );

    expect(request.request.method).toBe('GET');

    request.flush(fakePlatforms);
  });

  it('removePlatform() should return true', () => {
    service.removePlatform(1).subscribe((response) => {
      expect(response).toBe(true);
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/platformTypes/remove/1`
    );

    expect(request.request.method).toBe('DELETE');

    request.flush(true);
  });
});
