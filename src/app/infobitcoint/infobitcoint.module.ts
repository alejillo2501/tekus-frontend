import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InfobitcointPageRoutingModule } from './infobitcoint-routing.module';

import { InfobitcointPage } from './infobitcoint.page';

import { Services } from '../config/services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfobitcointPageRoutingModule
  ],
  declarations: [InfobitcointPage],
  providers: [Services]
})
export class InfobitcointPageModule {}
