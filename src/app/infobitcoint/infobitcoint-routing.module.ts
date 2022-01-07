import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfobitcointPage } from './infobitcoint.page';

const routes: Routes = [
  {
    path: '',
    component: InfobitcointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfobitcointPageRoutingModule {}
