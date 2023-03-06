import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { Entreprise } from '../Model/Entreprise.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  nbrEntreprise:number=0
  page:number=1
  liste :Entreprise[]=[]
  constructor(
    private service:CrudService, 
    private route:Router
  ) {}
  supprimerEntreprise(entreprise:Entreprise){
    if (confirm("voulez-vous supprimer cette Entreprise ?"))
    {
      this.service.deleteEntreprise(entreprise.id).subscribe(()=>{
        this.route.navigate(["/entreprise"]).then(()=>{
          window.location.reload()
        })
      })
    }
  }

  updateLivetat(enteprise:Entreprise){
    console.log(enteprise);

    let index=this.liste.indexOf(enteprise);
    if(enteprise.etat==true)
    {let newEntreprise=new Entreprise(enteprise.id,enteprise.nom,enteprise.img,false,enteprise.mdp,enteprise.email,enteprise.adr,
      enteprise.tel)
    this.service.updateEnt(newEntreprise,enteprise.id!).subscribe
  (
    res=>{console.log(res)
    this.liste[index]=newEntreprise
    },
    err=>console.log(err)
  )
    }
   
    else{

      let newEntreprise=new Entreprise(enteprise.id,enteprise.nom,enteprise.img,true,enteprise.mdp,enteprise.email,enteprise.adr,
        enteprise.tel)
      this.service.updateEnt(newEntreprise,enteprise.id!).subscribe
    (
      res=>{console.log(res)
      this.liste[index]=newEntreprise
      },
      err=>console.log(err)
    )

    }



  }

  ngOnInit(): void {
    this.service.getEntreprise().subscribe(entreprise=>{
      this.liste=entreprise
      this.nbrEntreprise=entreprise.length
    })
  }

}
