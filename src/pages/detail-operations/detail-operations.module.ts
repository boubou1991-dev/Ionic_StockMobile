import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailOperationsPage } from './detail-operations';

@NgModule({
  declarations: [
    DetailOperationsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailOperationsPage),
  ],
})
export class DetailOperationsPageModule {}
