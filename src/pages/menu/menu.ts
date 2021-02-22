import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { category } from '../../models/interface-category';
import { JxEquipementPage } from '../jx-equipement/jx-equipement';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
rootPage:any;
navigate:any;
categories:category[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sideMenu();
  // this.rootPage=HomePage;
   this.rootPage=JxEquipementPage;
   this.categories=[
     {title:'BAZIN RICHE',description:'Description',icon:'shirt'},
     {title:'COUTURE FEMME',description:'desription',icon:'phone-portail'},
     {title:'COUTURE HOMME',description:'description',icon:'bowtie'},
   ]
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Chat",
        url   : "/chat",
        icon  : "chatboxes"
      },
      {
        title : "Contacts",
        url   : "/contacts",
        icon  : "contacts"
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
