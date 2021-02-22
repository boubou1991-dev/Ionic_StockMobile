import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cuve } from '../../models/Jxinterface-cuve';
import { ProductService } from '../../app/services/product.service';
import { DetailOperationsPage } from '../detail-operations/detail-operations';
import { JxGeoPage } from '../jx-geo/jx-geo';
//import { DetailoperationPage } from '../DetailOperations/detailOperations';

/**
 * Generated class for the JxDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jx-details',
  templateUrl: 'jx-details.html',
})
export class JxDetailsPage {
siteDetails:Cuve;

listProduct:any;
jsonData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public productService:ProductService) {
  // this.siteDetails= this.navParams.get('site');
 // console.log('detail sie:',this.siteDetails);
 this.initializaJsonData();
 //this.getAllProduct();
  }

FilterJsonData(ev:any){
//this.initializaJsonData();
//this.getAllProduct();
const val = ev.target.value;
if(val && val.trim() !=''){
  this.listProduct=this.listProduct.filter((item)=>{
    return (item.nomProduit.toLowerCase().indexOf(val.toLowerCase())>-1);
  })
}
  }

  initializaJsonData(){
  /*
    this.listProduct=[
     // {"idproduit":96,"nomProduit":"AAAg_prod","quantite":14,"Serie":"serie","dateInsertion":"2020-07-09","idMarque":1,"Type":"Sondes"},{"idproduit":80,"nomProduit":"Attache","quantite":26,"Serie":null,"dateInsertion":"9-3-2020","idMarque":2,"Type":""},{"idproduit":97,"nomProduit":"AZE1","quantite":7,"Serie":"serie","dateInsertion":"2020-11-19","idMarque":1,"Type":"GALILEOSKY"},{"idproduit":10,"nomProduit":"Boite de derivation ","quantite":16,"Serie":null,"dateInsertion":"31-3-2020","idMarque":2,"Type":""},{"idproduit":50,"nomProduit":"Boitier RCT","quantite":25,"Serie":null,"dateInsertion":"16-3-2020","idMarque":2,"Type":"RCT"},{"idproduit":58,"nomProduit":"Bornier jonction 2.5","quantite":149,"Serie":null,"dateInsertion":"16-3-2020","idMarque":2,"Type":""}
    
    ];
   */
   
   this.productService.findAll()
   .subscribe(data=>{
     this.listProduct=data;
   })
   
  }
 ngOnInit(){
//this.getAllProduct();
 }

 getAllProduct(){
  this.productService.findAll()
  .subscribe(data=>{
    this.listProduct=data;
  })
 }

 viewDetails(produit){
 this.navCtrl.push(DetailOperationsPage,{produit:produit})
 } 
 
 sendOperation(){
  this.navCtrl.push(JxGeoPage);
  console.log("redirect Operations...");
  
 }

 ionViewDidLoad() {
    console.log('ionViewDidLoad JxDetailsPage');
  }




}
