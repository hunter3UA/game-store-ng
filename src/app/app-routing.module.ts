import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  PreloadingStrategy,
  RouterModule,
  Routes,
} from '@angular/router';
import { HomeComponent } from './modules/root/components/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'publishers',
    loadChildren: () =>
      import('./modules/publisher/publisher.module').then(
        (m) => m.PublisherModule
      ),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./modules/game/game.module').then((m) => m.GameModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
