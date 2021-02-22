import { Component } from '@angular/core';
import { NavController ,AlertController,AlertOptions,ActionSheetController, ActionSheetOptions} from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Product } from '../../models/interface-products';
//import {ImageViewerController} from 'ionic-img-viewer';
//import { CreateProductPage } from '../create-product/create-product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /*
Articles:Product[];
  constructor(public navCtrl: NavController,
    public alertCtrl:AlertController,public actionCtrl:ActionSheetController
    ,public imageViewer: ImageViewerController) {
this.Articles=[
{
title:'Ordinateur Portable',
description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aut suscipit nisi cum cumque, ab atque libero possimus. Consectetur maiores atque velit asperiores',
price:75000,
category:'Ordinateur',
createAt:new Date(),
state:'Neuf',
city:'Bamako',
id:'1',
averageStar:4,
availability:{
  available:true,
  type:'Livraison',
  feed:10000
},
pictures:[
  'assets/imgs/Ordinateurs/ordinateur1.jpg',
  'assets/imgs/Ordinateurs/ordinateur2.jpg',
  'assets/imgs/Ordinateurs/ordinateur3.jpg',
  'assets/imgs/Ordinateurs/ordinateur4.jpg',
  'assets/imgs/Ordinateurs/ordinateur5.jpg'
]
},
{
  title:'SmartPhone',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aut suscipit nisi cum cumque, ab atque libero possimus. Consectetur maiores atque velit asperiores',
  price:100000,
  category:'Telehone',
  createAt:new Date(),
  state:'Neuf',
  city:'Bamako',
  id:'2',
  averageStar:2,
  availability:{
    available:true,
    type:'Livraison',
    feed:15000
  },
  pictures:[
    'assets/imgs/Telephones/telephone1.jpg',
    'assets/imgs/Telephones/telephone2.jpg',
    'assets/imgs/Telephones/telephone3.jpg',
    'assets/imgs/Telephones/telephone4.jpg',
	'assets/imgs/Telephones/telephone3.jpg'
  ]
  },
  {
    title:'Tablette Galaxy',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aut suscipit nisi cum cumque, ab atque libero possimus. Consectetur maiores atque velit asperiores',
    price:400000,
    category:'Tablette',
    createAt:new Date(),
    state:'Neuf',
    city:'Bamako',
    id:'3',
    averageStar:4,
    availability:{
      available:true,
      type:'Livraison',
      feed:25000
    },
    pictures:[
      'assets/imgs/Tablettes/tablette1.jpg',
      'assets/imgs/Tablettes/tablette2.jpg',
      'assets/imgs/Tablettes/tablette3.jpg',
      'assets/imgs/Tablettes/tablette4.jpg',
	  'assets/imgs/Tablettes/tablette5.jpg'
    ]
    },
    {
      title:'Imprimantes Couleur',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aut suscipit nisi cum cumque, ab atque libero possimus. Consectetur maiores atque velit asperiores',
      price:75000,
      category:'Imprimante',
      createAt:new Date(),
      state:'Neuf',
      city:'Bamako',
      id:'4',
      averageStar:3,
      availability:{
        available:true,
        type:'Livraison',
        feed:5000
      },
      pictures:[
        'assets/imgs/Imprimantes/imprimante1.jpg',
        'assets/imgs/Imprimantes/imprimante2.jpg',
        'assets/imgs/Imprimantes/imprimante3.jpg',
        'assets/imgs/Imprimantes/imprimante4.jpg'
      ]
      }
]

}

showDetails(article:Product):void{
  this.navCtrl.push(DetailsPage,{'data':article});

  }

  showCreatePage():void{
    this.navCtrl.push(CreateProductPage);
  }
  */
}
