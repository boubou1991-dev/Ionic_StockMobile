import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Availability, Product } from '../../models/interface-products';

/**
 * Generated class for the CreateProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-produit',
  templateUrl: 'create-produit.html',
})
export class CreateProduitPage {

 
myProduct:Product;
categories= [];
cities=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myProduct={} as Product;
    this.myProduct.availability={} as Availability;
    this.myProduct.pictures=[];
    this.categories=[
      {
        title:"Tablettes"
      },
      {
        title:"Imprimantes"
      },
      {
        title:"Telephones"
      },
      {
        title:'ordinateur'
      }
    ];
    this.cities=[
      {name:"Bamako"},
      {name:"Dakar"},
      {name:"Abidjan"}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProductPage');
  }

  create(myProduct){
    console.log('myProduct=',myProduct);

    myProduct.id="5";  
    myProduct.createAt= new Date();
    myProduct.averageStar=1;
    myProduct.availability.available=true;
    

}
}
