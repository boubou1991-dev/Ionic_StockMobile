import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, AlertController,AlertOptions  } from 'ionic-angular';
import { Connexion } from '../../models/interface-login';
import { JxEquipementPage } from '../jx-equipement/jx-equipement';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { UserService } from '../../app/services/user.service';

//import {Platform} from '@ionic/angular';

/**
 * Generated class for the JxLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jx-login',
  templateUrl: 'jx-login.html',
})
export class JxLoginPage{
userList:any;
loginconnect:any;
myUser: Connexion;
etat:any;
logo:any;
  constructor( public http:HttpClient,public platform:Platform,public navCtrl: NavController, 
    public navParams: NavParams,public alertCtrl:AlertController
    ,public userService:UserService) {
 
   this.myUser={} as Connexion;
    this.logo='assets/imgs/logo2.png';
    this.getUser();
  // this.saveUserData();
  
  }

  getUser(){
    this.userService.findAll()
    .subscribe(data=>this.userList=data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JxLoginPage');
    this.getUser();
  }

  getConnexion(myUser){

console.log('Login est:',myUser.login);
console.log('Password est :',myUser.password);
this.userList.forEach((value:any) => {
      
  if (value.login == this.myUser.login && value.pwd == this.myUser.password) {
    this.userList = value;
    this.etat=true;
    console.log('login connecté:', value.login);
    console.log('password connecté:', value.pwd);
   this.loginconnect=value.login;
   this.navCtrl.push(JxEquipementPage)
  }

});
if(!this.etat){
  this.resetLogin();
 // alert('Erreur d Utilisateur ou  Mot de passe ')
 let options:AlertOptions={
  title:"Attention!",
  subTitle:`Erreur d'Utilisateur ou Mot de passe`,
  buttons:[
    {
      text:'Annuler',
      role:'cancel'
    }
  ]
}
this.alertCtrl.create(options).present()

}
  }

 

  goToLogin(){
    console.log('Login OK');

    this.userList.forEach((value:any) => {
      
      if (value.login == this.myUser.login && value.pwd == this.myUser.password) {
        this.userList = value;
        this.etat=true;
        console.log('login connecté:', value.login);
        console.log('password connecté:', value.pwd);
       this.loginconnect=value.login;
       this.navCtrl.push(JxEquipementPage)
      }
   
    });
if(!this.etat){
  alert("Login ou Mot de passe Incorrect");
  this.resetLogin();
}

   /// this.router.navigate(['/stock']) 
  //  this.router.navigate(['/employees-list'])
  }

  saveUserData(){
    var dataTosend={name:this.myUser.login,mobile:this.myUser.password,email:'boubou@gmail.com',adress:"Banankabougou"};
    var url="http://localhost:3300/insertUser/";
    this.http.post(url,{data:JSON.stringify(dataTosend)},
    {headers:new HttpHeaders({"content-Type":"application/json"})})
    .subscribe((data)=>{
   alert(data);
    })
  }

  resetLogin(){
    this.myUser.login='';
    this.myUser.password='';
  }
 

}
