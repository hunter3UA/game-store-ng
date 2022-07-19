import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
  {
    path: 'platforms',
    loadChildren: () =>
      import('./modules/platform-type/platform-type.module').then(
        (m) => m.PlatformTypeModule
      ),
  },
  {
    path: 'genres',
    loadChildren: () =>
      import('./modules/genre/genre.module').then((m) => m.GenreModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/order/order.module').then((m) => m.OrderModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/comment/comment.module').then((m) => m.CommentModule),
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
