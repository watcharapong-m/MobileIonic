import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycatalogappPage } from './mycatalogapp.page';

const routes: Routes = [
  {
    path: '',
    component: MycatalogappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycatalogappPageRoutingModule {}
