import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertOptions,AlertController  } from 'ionic-angular';
import { JxLoginPage } from '../jx-login/jx-login';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../app/services/product.service';
import { Operation } from '../../models/interface-operation';
import { OperationService } from '../../app/services/operation.service';
import { ToastController } from 'ionic-angular';
import { ToastOptions } from 'ionic-angular';

/**
 * Generated class for the JxGeoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jx-geo',
  templateUrl: 'jx-geo.html',
})
export class JxGeoPage {
  showForm:any=false;
  listProduits:any;
  myOperation:Operation;
  nameProductUrl:any; 
libelleSave:string;
  searchText="";
  quant:number=0;
  stockactuel: number=0;
  stockFinale:number=0;
  dateCourant= new Date();

  constructor(public http:HttpClient,public produitService:ProductService,public OperationService:OperationService,
    public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams
    ,public toastCtrl:ToastController) {
  this.getListproduit();
  this.myOperation={} as Operation;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JxGeoPage');
  }
  
  getListproduit(){
   this.produitService.findAll()
   .subscribe(data=>{
     this.listProduits=data;
   })
  }

  searchQuantity(){
   // this.produitService.findOne(this.myOperation.nomProduit)
    this.produitService.findAll()
    .subscribe(data=>{
      this.nameProductUrl=data;
      console.log("url product:"+this.nameProductUrl);
    });
  }

  UpdateQuantiteLocal() {
    this.listProduits.forEach((value:any) => {
if(value.nomProduit == this.myOperation.nomProduit){
      this.stockactuel =value.quantite;
      this.stockFinale= this.stockactuel - this.myOperation.quantite;      
      this.OperationService.updateQuantity(+this.myOperation.nomProduit+'/'+this.stockFinale)
             .subscribe(()=>{
               console.log('quantity updated....')
             })

       this.showForm = false;
     }     
   }
   );
  }

  updateQuantiteDepot(){   this.listProduits.forEach((value:any) => {
    if(value.nomProduit == this.myOperation.nomProduit){
          this.stockactuel =value.quantite;
          this.stockFinale= Number.parseInt(this.stockactuel.toString()) +  Number.parseInt(this.myOperation.quantite.toString());      
          this.OperationService.updateQuantity(+this.myOperation.nomProduit+'/'+this.stockFinale)
                 .subscribe(()=>{
                   console.log('quantity updated....')
                 })
    
           this.showForm = false;
         }     
       }
       );
  }
  saveOperation(lib:string){
    let query=lib+' Stock/boubou/2/'+this.myOperation.date+'/7/2020/'
    +this.myOperation.responsable+'/'+this.myOperation.libelle+'/0/'+this.myOperation.quantite+'/'+this.stockFinale+'/'+this.myOperation.nomProduit+'/op/imei/3';
   this.produitService.saveOperation(query)
   .subscribe(()=>{
     console.log('operation effectuée....')
   })
  this.confirmation();
   this.ResetOperation();
  }

  retraitOperation(){
    this.UpdateQuantiteLocal();    
    this.saveOperation("Retrait");
    this.ResetOperation();
  }

  depotOperation(){
    this.updateQuantiteDepot();
    this.saveOperation("Depot");
    this.ResetOperation();
  }
  Deconnexion(){
    this.navCtrl.push(JxLoginPage);
  }

  ResetOperation(){
    this.myOperation.nomProduit='';
    this.myOperation.quantite=0;
    this.myOperation.responsable='';
    this.myOperation.libelle='';
    this.myOperation.date=new Date;
  }


  confirmation(){
    let options:ToastOptions={
      message:"Operation a été effectué avec succès!",
      duration:5000,
      showCloseButton:true,
      closeButtonText:"Fermer"
    };
    this.toastCtrl.create(options).present();
    /*
    let options:AlertOptions={
      title:"Confirmation",
      subTitle:`Operation a été effectué avec succes!`,
      buttons:[
        {
          text:'Annuler',
          role:'cancel'
        }
      ]
    }
    this.alertCtrl.create(options).present()
    */
  }

}
