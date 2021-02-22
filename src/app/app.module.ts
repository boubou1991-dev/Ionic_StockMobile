import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClient, HttpClientModule} from '@angular/common/http';
//import { HttpModule } from '@angular/common/http';
import{ IonicStorageModule } from '@Ionic/storage';
//import {IonicImageViewerModule} from 'ionic-img-viewer';
import{DatePicker} from '@ionic-native/date-picker/ngx';
import {DatePipe} from '@angular/common';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { CartPage } from '../pages/cart/cart';
import { JxAlertePage } from '../pages/jx-alerte/jx-alerte';
import { JxDetailsPage } from '../pages/jx-details/jx-details';
import { JxLoginPage } from '../pages/jx-login/jx-login';
import { JxEquipementPage } from '../pages/jx-equipement/jx-equipement';
import { JxGeoPage } from '../pages/jx-geo/jx-geo';
import { DetailOperationsPage } from '../pages/detail-operations/detail-operations';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { OperationService } from './services/operation.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
   // ListPage,
    //MenuPage,
    CartPage,
    //CreateProductPage,
    JxAlertePage,
    JxDetailsPage,
    JxLoginPage,
    JxEquipementPage,
    JxGeoPage,
    DetailOperationsPage
  ],
  imports: [
    BrowserModule,HttpClientModule,/*HttpModule,*/
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
   //, IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    // ListPage,
     //MenuPage,
     CartPage,
     //CreateProductPage,
     JxAlertePage,
     JxDetailsPage,
     JxLoginPage,
     JxEquipementPage,
     JxGeoPage,
     DetailOperationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductService,UserService,OperationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},DatePicker,DatePipe
  ]
})
export class AppModule {}
