import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MymapPageRoutingModule } from './mymap-routing.module';

import { MymapPage } from './mymap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MymapPageRoutingModule
  ],
  declarations: [MymapPage]
})
export class MymapPageModule {}
