import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JxGeoPage } from '../jx-geo/jx-geo';
import { JxEquipementPage } from '../jx-equipement/jx-equipement';
import { JxDetailsPage } from '../jx-details/jx-details';

/**
 * Generated class for the JxAlertePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jx-alerte',
  templateUrl: 'jx-alerte.html',
})
export class JxAlertePage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JxAlertePage');
  }
 

  NewProduct(){
    this.navCtrl.push(JxEquipementPage)
  }

  listProduct(){
    console.log('redirection vers list product');
    this.navCtrl.push(JxDetailsPage)
  }

  createMission(){
    this.navCtrl.push(JxGeoPage)
  }
}
