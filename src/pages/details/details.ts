import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events, ToastController, ToastOptions,ModalController } from 'ionic-angular';
import { Product } from '../../models/interface-products';
import {Storage} from '@Ionic/storage';
import { itemCart } from '../../models/interface-itemCart';
import { CartPage } from '../cart/cart';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
productDetails:Product;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public event:Events,public storage:Storage,public toastCtrl:ToastController,public modal: ModalController) {
    this.productDetails=this.navParams.get('data');
    this.event.subscribe('star-ratin:changed',(note)=>{
console.log('Voici la note choisie:',note);

    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  goBack():void{
    this.navCtrl.pop();
  }
  addToCart(productDetails:Product):void{
   let added:boolean=false;
   this.storage.get("Cart")
   .then((data:itemCart[])=>{
     //**si le panier est vide */
     if(data===null || data.length===0)   {
       console.log('panier vide');
       
       data=[];
       data.push({
         item:productDetails,
         qty:1,
         amount:productDetails.price
       })
     }  else{
    console.log("Le panier n est pas vide");
    
       // si le panier n est pas vide
       for(let i=0;i<data.length;i++){
         const element:itemCart=data[i];
     if(productDetails.id=== element.item.id){
       //le ânier n est pas vide et contient article
       console.log("le Panier n est pas vide et contient article");
       
       element.qty+=1;
       element.amount+=productDetails.price;
       added=true;       
     }  
       }
if(!added){
  console.log("le panier n est pas vide et ne contient pas d article  ");
//
data.push({
item:productDetails,
qty:1,
amount:productDetails.price
})
}       
     }
     this.storage.set("Cart",data)
     .then(data=>{
             let options:ToastOptions={
               message:"Votre panier a été mis à jour",
               duration:1500,
               showCloseButton:true,
               closeButtonText:"fermer"
             };
             this.toastCtrl.create(options).present();
     })
     .catch(err=>{
console.log("Erreur",err);
       
     })
   })
  }
  openCart():void{
   this.modal.create(CartPage).present();
  }
}
