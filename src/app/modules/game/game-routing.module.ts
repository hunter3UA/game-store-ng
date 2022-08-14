import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from '../core/enums/role';
import { AuthGuard } from '../root/guards/auth/auth.guard';
import { GameUpdateGuard } from '../root/guards/game/game-update.guard';
import { RoleGuard } from '../root/guards/role/role.guard';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { UpdateGameComponent } from './pages/update-game/update-game.component';

const routes: Routes = [
  { path: '', component: AllGamesComponent },
  {
    path: 'new',
    component: AddGameComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: [Role.Admin, Role.Manager] },
  },
  { path: ':key', component: GameDetailsComponent },
  {
    path: 'update/:key',
    component: UpdateGameComponent,
    canActivate: [GameUpdateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
