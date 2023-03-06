import { Offre } from "./Offre.model";

export class Entreprise{

    constructor(
        public id?:undefined|number,
        public  nom?:String ,
        public  img?:String ,
        public  etat?:boolean ,
        public   mdp?:String ,
        public  email?:String ,
        public adr?:String ,
        public  tel?:String ,
        public offre?:Offre[]
    ) {

    }
}