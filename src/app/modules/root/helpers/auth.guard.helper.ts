import { lastValueFrom } from 'rxjs';
import { RefreshTokenRequestDTO } from '../../core/api-models/auth/refresh.token.request.dto';
import { TokenStorageService } from '../../user/services/token-storage/token-storage.service';

export class AuthGuarHelper {
  static async refreshAsync(tokenService: TokenStorageService) {
    let refreshTokenRequestDTO = new RefreshTokenRequestDTO();
    refreshTokenRequestDTO.expiredAccessToken = tokenService.getAccessToken();
    refreshTokenRequestDTO.refreshToken = tokenService.getRefreshToken();
    let resp = await lastValueFrom(
      tokenService.refreshJwtToken(refreshTokenRequestDTO)
    );
    tokenService.authenticate(resp);
    return true;
  }
}
