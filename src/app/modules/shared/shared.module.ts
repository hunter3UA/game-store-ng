import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule }   from '@angular/common/http';
import { GenreService } from './services/genre/genre.service';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule
  ],
  providers:[ GenreService],
  exports:[]
})
export class SharedModule { }
