export interface Produit{
    idproduit?:number;
    nomProduit:string;
    categorie:string;
    quantite:number;
    dateInsertion?:Date,
    responsable:string;
    motif:string;
    type:string;
}