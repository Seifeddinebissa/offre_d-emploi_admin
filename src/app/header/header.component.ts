import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/Router';
import { Contact } from '../Model/Contact.model';
import { Offre } from '../Model/Offre.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any;
  liste : Contact[]=[]
  liste2 :Offre[]=[]
  liste1 :Offre[]=[]
  totalContact:number=0;
  totaloffre:number=0;
  constructor(
    private service:CrudService,
    private route:Router
  ) { 
    this.user=this.service.userDetail()
  }
  
  ngOnInit(): void {
    console.log(this.user);
    this.service.getContact().subscribe(contact =>{
      this.totalContact=contact.length
      this.liste=contact})

      this.service.getOffre().subscribe(offre=>{
        this.liste1=offre
        this.liste2=this.liste1.filter(offre=>offre.etat==false)
        this.totaloffre=this.liste2.length
       
      })  
  }
  logOut(){
    localStorage.clear()
    this.route.navigate(["/login"])
  }

}
