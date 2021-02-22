import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

import 'rxjs/Rx';

@Injectable()
export class ProductService{

baseUrl:String;

constructor(private http:HttpClient){

    this.baseUrl='http://localhost:2000';
}

findAll(){
 return this.http.get(this.baseUrl+"/produits")
// .map(res=> res.json());
}

findAllCategories(){
return this.http.get(this.baseUrl+"/categories");
}
save(requete:string){
return this.http.get(this.baseUrl+"/insertProduct/"+requete)
}

findAllDetailOperation(produit:string){
return this.http.get(this.baseUrl+"/operationDetails/"+produit)
//.map(res=> res.json());
}

findOne(nom:string){
    return this.http.get(this.baseUrl+"/produits/"+nom)
   }

saveOperation(requete:string){
 return this.http.get(this.baseUrl+"/InsertOP/"+requete)
}

}