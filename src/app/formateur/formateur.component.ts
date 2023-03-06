import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { Formateur } from '../Model/Formateur.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  page:number=1
  nbrFormateur:number=0
  liste : Formateur[]=[]
  constructor(
    private service:CrudService,
    private route:Router
  ) { }
  supprimerFormateur(formateur:Formateur){
    if (confirm("voulez-vous supprimer ce Formateur ?"))
    {
      this.service.deleteFormateur(formateur.id).subscribe(()=>{
        this.route.navigate(["/formateur"]).then(()=>{
          window.location.reload()
        })
      })
    }
  }
  ngOnInit(): void {
    this.service.getFormateur().subscribe(formateur=>{
      this.liste=formateur
      this.nbrFormateur=formateur.length
    })
  }

}

