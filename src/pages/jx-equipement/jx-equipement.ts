import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, AlertController,AlertOptions} from 'ionic-angular';
import { Cuve } from '../../models/Jxinterface-cuve';
import { JxDetailsPage } from '../jx-details/jx-details';
import { JxGeoPage } from '../jx-geo/jx-geo';
import { Produit } from '../../models/interface-StockProduit';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { ProductService } from '../../app/services/product.service';
import{DatePicker} from '@ionic-native/date-picker/ngx';
import {DatePipe} from '@angular/common';
import { ToastController } from 'ionic-angular';
import { ToastOptions } from 'ionic-angular';

/**
 * Generated class for the JxEquipementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jx-equipement',
  templateUrl: 'jx-equipement.html',
})
export class JxEquipementPage {
  navigate:any;
  selectedDate:string="";
  
  Sites:Cuve[];
  monProduit:Produit;
  datecourant:any=new Date();
  categories:any;
  constructor(public http:HttpClient,public produitServive:ProductService, public platform:Platform,public alertCtrl:AlertController
    ,public navCtrl: NavController,public toastCtrl:ToastController,
     public navParams: NavParams,public datepicker:DatePicker,public datepipe:DatePipe) {
this.monProduit={} as Produit;
this.sideMenu();
this.getAllCategories();
/*
this.platform.ready().then(()=>{
  this.selectedDate = this.datepipe.transform(new Date(),"dd-MM-yyyy");
})
*/
  
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


getAllCategories(){
this.produitServive.findAllCategories()
.subscribe((data)=>{
  this.categories=data;
})
  }

SelectDate(){
  /*
  var options={
    date:new Date(),
    mode:'date',
    androidTheme:this.datepicker.ANDROID_THEMES.THEME_TRADITIONAL
  }
  this.datepicker.show(options).then((date)=>{
    this.selectedDate = this.datepipe.transform(date,"dd-MM-yyyy");
   })
   */
  this.datepicker.show({
    date: new Date(),
    mode: 'date',
    androidTheme: this.datepicker.ANDROID_THEMES.THEME_TRADITIONAL
  })
  .then(
    date => console.log('Got date: ', date),
    err => console.log('Error occurred while getting date: ', err)
  );
 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad JxEquipementPage');
  }
resetProduct(){
  this.monProduit.nomProduit='';
  this.monProduit.categorie='';
  this.monProduit.quantite=0;
  this.monProduit.responsable='';
  this.monProduit.motif='';
  this.monProduit.dateInsertion=null;
}

selectionnerChamps(){
  let options:ToastOptions={
    message:"Veillez Renseignez tous les champs",
    duration:3000,
    showCloseButton:true,
    closeButtonText:"fermer"
  };
  this.toastCtrl.create(options).present();
}

saveOperation(){
  let query='Creation Stock/boubou/2/'+this.monProduit.dateInsertion+'/7/2020/'
  +this.monProduit.responsable+'/'+this.monProduit.motif+'/0/'+this.monProduit.quantite+'/'+this.monProduit.quantite+'/'+this.monProduit.nomProduit+'/op/imei/3';
 this.produitServive.saveOperation(query)
 .subscribe(()=>{
   console.log('operation effectuée....')
 })

}

createProduct(){
  if(this.monProduit.nomProduit===""){
    this.selectionnerChamps();
  } else{
    let requete=this.monProduit.nomProduit+"/"+this.monProduit.quantite+"/serie/"+this.monProduit.dateInsertion+"/1/"+this.monProduit.categorie;
    this.produitServive.save(requete)
    .subscribe(()=>{
      console.log('insert product..');    
      this.resetProduct();
    }) 
 this.saveOperation();
 this.confirmation();
  }
}
    
confirmation(){
  let options:AlertOptions={
    title:"Reussi!",
    subTitle:`Produit ajouté avec Succès`,
    buttons:[
      {
        text:'OK',
        role:'cancel'
      }
    ]
  }
  this.resetProduct();
  this.alertCtrl.create(options).present()
}
  showMessage(site:Cuve){
    this.navCtrl.push(JxDetailsPage,{'site':site});
  }
  createMission(){
    this.navCtrl.push(JxGeoPage)
  }
}
