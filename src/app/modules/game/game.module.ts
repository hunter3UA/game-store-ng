import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameRoutingModule } from './game-routing.module';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { SharedModule } from '../shared/shared.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { UpdateGameComponent } from './pages/update-game/update-game.component';
import { FilterPanelComponent } from './parts/filter-panel/filter-panel.component';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PaginationComponent } from './parts/pagination/pagination.component';

@NgModule({
  declarations: [
    AddGameComponent,
    AllGamesComponent,
    GameDetailsComponent,
    UpdateGameComponent,
    FilterPanelComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    MtxCheckboxGroupModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
  ],
})
export class GameModule {}
