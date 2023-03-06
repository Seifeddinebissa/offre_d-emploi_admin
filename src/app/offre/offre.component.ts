import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { Offre } from '../Model/Offre.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  page:number=1
  nbrOffre:number=0
  liste : Offre[]=[]
  
  constructor(
    private service:CrudService,
    private route:Router
  ) { }
  supprimerOffre(offre:Offre){
    if (confirm("voulez-vous supprimer cet Offre ?"))
    {
      this.service.deleteOffre(offre.id).subscribe(()=>{
        this.route.navigate(["/offre"]).then(()=>{
          window.location.reload()
        })
      })
    }
  }

  updateOfetat(offre:Offre){
    console.log(offre);
    let index=this.liste.indexOf(offre);
    if(offre.etat==true)
    {let newOffre=new Offre(offre.id,offre.titre,false,offre.description,offre.logo,offre.datedeb,
      offre.datefin,offre.experience,offre.langue,offre.niveau,offre.type,offre.salaire,offre.genre,offre.nbpersonne,offre.entreprise)
    this.service.updateOffre(newOffre,offre.id!).subscribe
  (
    res=>{console.log(res)
    this.liste[index]=newOffre
    },
    err=>console.log(err)
  )
    }
   
    else{

      let newOffre=new Offre(offre.id,offre.titre,true,offre.description,offre.logo,offre.datedeb,
        offre.datefin,offre.experience,offre.langue,offre.niveau,offre.type,offre.salaire,offre.genre,offre.nbpersonne,offre.entreprise)
      this.service.updateOffre(newOffre,offre.id!).subscribe
    (
      res=>{console.log(res)
      this.liste[index]=newOffre
      },
      err=>console.log(err)
    )

    }



  }
  ngOnInit(): void {
    this.service.getOffre().subscribe(offre=>{
      this.liste=offre
      this.nbrOffre=offre.length
      console.log(this.liste)
    })
  }

}

