import { Entreprise } from "./Entreprise.model";

export class Offre{

    constructor(
        public  id? :number|undefined,
        public titre?:String ,
        public   etat?:boolean ,
        public   description?:String ,
        public   logo?:String ,
        public   datedeb?:String ,
        public   datefin?:String ,
        public   experience?:String ,
        public   langue?:String ,
        public   niveau?:String ,
        public   type?:String ,
        public   salaire?:String ,
        public   genre?:String ,
        public   nbpersonne?:number ,
        public  entreprise?:Entreprise
    ) {

    }
}