import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductService } from '../../app/services/product.service';

/**
 * Generated class for the DetailOperationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-operations',
  templateUrl: 'detail-operations.html',
})
export class DetailOperationsPage {
  produit:any;
  produitDetail:any;
  listDetails:any;
    constructor(public navCtrl: NavController,public params:NavParams,public produitService:ProductService) {
    this.produit=params.get('produit');
    this.produitDetail=this.produit;
    console.log(' parametre transfere:'+this.produitDetail)
    this.DetailsOp();
    }
  
    ngOnInit(){
    // this.DetailsOp();
        }
  
    DetailsOp(){
        this.produitService.findAllDetailOperation(this.produitDetail)
        .subscribe(data=>{
            this.listDetails=data;
            console.log("List : "+this.listDetails)
        })
       
    }

}
