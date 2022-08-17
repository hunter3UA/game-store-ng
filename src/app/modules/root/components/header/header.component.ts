import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/modules/core/models/user';
import { GameService } from 'src/app/modules/shared/services/game/game.service';
import { TokenStorageService } from 'src/app/modules/user/services/token-storage/token-storage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public currentUser: User;
  public totalCountOfGames: number;
  public jwtHelper = new JwtHelperService();

  constructor(
    private gameService: GameService,
    public tokenService: TokenStorageService,
    public translator: TranslateService
  ) {
    this.currentUser = new User();
    this.currentUser = this.tokenService.getUser();
  }
  ngOnInit(): void {
    this.loadAllGames();
  }

  loadAllGames() {
    this.gameService.getTotalGames().subscribe((data) => {
      if (data) {
        this.totalCountOfGames = data;
      }
    });
  }

  logOut() {
    this.tokenService.signOut();
  }
}
