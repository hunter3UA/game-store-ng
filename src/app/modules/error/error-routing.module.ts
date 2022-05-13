import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadRequestErrorComponent } from './pages/bad-request-error/bad-request-error.component';
import { InternalServerErrorComponent } from './pages/internal-server-error/internal-server-error.component';

import { NotFoundErrorComponent } from './pages/not-found-error/not-found-error.component';

const routes: Routes = [
  { path: '400', component: BadRequestErrorComponent },
  { path: '404', component: NotFoundErrorComponent },
  { path: '500', component: InternalServerErrorComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
