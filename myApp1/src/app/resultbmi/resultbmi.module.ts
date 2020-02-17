import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultbmiPageRoutingModule } from './resultbmi-routing.module';

import { ResultbmiPage } from './resultbmi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultbmiPageRoutingModule
  ],
  declarations: [ResultbmiPage]
})
export class ResultbmiPageModule {}
