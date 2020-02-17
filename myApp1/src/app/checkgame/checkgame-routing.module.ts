import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckgamePage } from './checkgame.page';

const routes: Routes = [
  {
    path: '',
    component: CheckgamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckgamePageRoutingModule {}
