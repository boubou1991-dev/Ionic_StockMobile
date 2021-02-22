export interface Cuve{
id?:number;
gsm_number?:string;
tank_id:string;
tstamp:string;
gas_level:number;
bat_level:number;
alarme?:Alarme;
}

export interface Alarme{
    id_alarme?:number;
    date?:string;
    heure?:string;
    site?:string;
    nouveau_volume?:number;
    message?:string;
    ancien_volume:number;
    statut?:string;
}