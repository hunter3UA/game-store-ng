import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  PreloadingStrategy,
  RouterModule,
  Routes,
} from '@angular/router';
import { HomeComponent } from './modules/root/components/home/home.component';

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
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
