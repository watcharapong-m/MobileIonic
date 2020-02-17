import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycatalogappPageRoutingModule } from './mycatalogapp-routing.module';

import { MycatalogappPage } from './mycatalogapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycatalogappPageRoutingModule
  ],
  declarations: [MycatalogappPage]
})
export class MycatalogappPageModule {}
