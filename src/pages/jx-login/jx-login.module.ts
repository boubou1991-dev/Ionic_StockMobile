import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JxLoginPage } from './jx-login';

@NgModule({
  declarations: [
    JxLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(JxLoginPage),
  ],
})
export class JxLoginPageModule {}
