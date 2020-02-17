import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MymapPage } from './mymap.page';

const routes: Routes = [
  {
    path: '',
    component: MymapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MymapPageRoutingModule {}
