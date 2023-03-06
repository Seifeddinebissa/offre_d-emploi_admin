import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalAdmins:number=0;
  totalFormateur:number=0;
  totalEntreprise:number=0;
  totalOffre:number=0
  constructor(
    private service:CrudService,
  ) { 
    
  }

  ngOnInit(): void {
    this.service.getAdmins().subscribe(admin =>{
      this.totalAdmins=admin.length})
    this.service.getFormateur().subscribe(formateur=>{
        this.totalFormateur=formateur.length})
    this.service.getEntreprise().subscribe(entreprise=>{
          this.totalEntreprise=entreprise.length})
    this.service.getOffre().subscribe(offre=>{
            this.totalOffre=offre.length})           
  }

}
