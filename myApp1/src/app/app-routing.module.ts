import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dbhomep1', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'p1login',
    loadChildren: () => import('./p1login/p1login.module').then( m => m.P1loginPageModule)
  },
  {
    path: 'p2result',
    loadChildren: () => import('./p2result/p2result.module').then( m => m.P2resultPageModule)
  },
  {
    path: 'bmi',
    loadChildren: () => import('./bmi/bmi.module').then( m => m.BMIPageModule)
  },
  {
    path: 'checkgame',
    loadChildren: () => import('./checkgame/checkgame.module').then( m => m.CheckgamePageModule)
  },
  {
    path: 'resultbmi/:height/:weight',
    loadChildren: () => import('./resultbmi/resultbmi.module').then( m => m.ResultbmiPageModule)
  },
  {
    path: 'listviewp1',
    loadChildren: () => import('./listviewp1/listviewp1.module').then( m => m.Listviewp1PageModule)
  },
  {
    path: 'listviewp2',
    loadChildren: () => import('./listviewp2/listviewp2.module').then( m => m.Listviewp2PageModule)
  },
  {
    path: 'socialcardp1',
    loadChildren: () => import('./socialcardp1/socialcardp1.module').then( m => m.Socialcardp1PageModule)
  },
  {
    path: 'mymap',
    loadChildren: () => import('./mymap/mymap.module').then( m => m.MymapPageModule)
  },
  // {
  //   path: 'connect-to-firebase',
  //   loadChildren: () => import('./connect-to-firebase/connect-to-firebase.module').then( m => m.ConnectToFirebasePageModule)
  // },
  {
    path: 'dbhomep1',
    loadChildren: () => import('./dbhomep1/dbhomep1.module').then( m => m.Dbhomep1PageModule)
  },
  // {
  //   path: 'mycatalogapp-page',
  //   loadChildren: () => import('./mycatalogapp-page/mycatalogapp-page.module').then( m => m.MycatalogappPagePageModule)
  // },
  // {
  //   path: 'catalogresult-page',
  //   loadChildren: () => import('./catalogresult-page/catalogresult-page.module').then( m => m.CatalogresultPagePageModule)
  // },
  {
    path: 'catalogresult/:dataObj',
    loadChildren: () => import('./catalogresult/catalogresult.module').then( m => m.CatalogresultPageModule)
  },
  {
    path: 'mycatalogapp',
    loadChildren: () => import('./mycatalogapp/mycatalogapp.module').then( m => m.MycatalogappPageModule)
  },
  // {
  //   path: 'catalog-app',
  //   loadChildren: () => import('./catalog-app/catalog-app.module').then( m => m.CatalogAppPageModule)
  // },
  // {
  //   path: 'coffee',
  //   loadChildren: () => import('./coffee/coffee.module').then( m => m.CoffeePageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
