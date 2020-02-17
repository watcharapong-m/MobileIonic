import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogresultPage } from './catalogresult.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogresultPageRoutingModule {}
