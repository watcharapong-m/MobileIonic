import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckgamePageRoutingModule } from './checkgame-routing.module';

import { CheckgamePage } from './checkgame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckgamePageRoutingModule
  ],
  declarations: [CheckgamePage]
})
export class CheckgamePageModule {}
