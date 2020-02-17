import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultbmiPage } from './resultbmi.page';

const routes: Routes = [
  {
    path: '',
    component: ResultbmiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultbmiPageRoutingModule {}
