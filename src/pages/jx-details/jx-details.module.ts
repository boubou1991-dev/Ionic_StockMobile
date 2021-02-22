import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JxDetailsPage } from './jx-details';

@NgModule({
  declarations: [
    JxDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(JxDetailsPage),
  ],
})
export class JxDetailsPageModule {}
