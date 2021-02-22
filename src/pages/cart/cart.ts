import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage, NavController, NavParams,ViewController,ToastController,AlertController, AlertOptions } from 'ionic-angular';
import { itemCart } from '../../models/interface-itemCart';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {


  cartItems:itemCart[];
  total:number=0;
    constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController
      ,public storage:Storage,public toast:ToastController,public alertCtrl:AlertController) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad CartPage');
      this.storage.get("Cart")
      .then((data:itemCart[])=>{
        this.cartItems=data;
        this.cartItems.forEach((element:itemCart)=>{
          if(element.item.availability.type==="Disponible en Magasin"){
          element.item.availability.feed=0;
          }        
          this.total+=(element.item.availability.feed+element.item.price*element.qty)
        })
      })
      .catch(err=>{
        console.log("Erreur",err);
        
      })
    
    }
  closeModal():void{
  this.viewctrl.dismiss();
  }
  removeItem(article:itemCart,index:number):void{
    let options:AlertOptions={
      title:"Attention!",
      subTitle:`Etez-vous sur de vouloir retirer ${article.item.title} ?`,
      buttons:[
        {
          text:'Annuler',
          role:'cancel'
        },
        {
          text:"Retirer",
          handler:()=>{
            let price:number=article.item.price;
            let qty:number=article.qty;
            let feed:number=article.item.availability.feed;
            let myTotal:number=feed+price*qty;
  
            this.cartItems.splice(index,1);
            this.storage.set("cart",this.cartItems)
            .then((data)=>{
              this.total-=myTotal;
            this.toast.create({
            message:"Article Retiré du panier !",
            duration:1000
          }).present()
            })
            .catch((err)=>{
              console.log("Erreur",err);
              
            })
          
          }
        }
      ]
  }
  this.alertCtrl.create(options).present()
  }

}
