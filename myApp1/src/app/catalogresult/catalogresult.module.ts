import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogresultPageRoutingModule } from './catalogresult-routing.module';

import { CatalogresultPage } from './catalogresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogresultPageRoutingModule
  ],
  declarations: [CatalogresultPage]
})
export class CatalogresultPageModule {}
