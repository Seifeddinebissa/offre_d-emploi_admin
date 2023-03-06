import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { Admin } from '../Model/Admin.model';

import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit {
  nbrAdmin:number=0
  page:number=1
  liste : Admin[]=[]
  constructor(
    private service:CrudService,
    private route:Router
  ) { }
  supprimerAdmin(admin:Admin){
    if (confirm("voulez-vous supprimer cet Administrateur ?"))
    {
      this.service.deleteAdmin(admin.id).subscribe(()=>{
        this.route.navigate(["/administrateur"]).then(()=>{
          window.location.reload()
        })
      })
    }
  }
  ngOnInit(): void {
    this.service.getAdmins().subscribe(admin=>{
      this.liste=admin
      this.nbrAdmin=admin.length
    })
  }

}
