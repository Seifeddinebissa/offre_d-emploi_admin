import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { Contact } from '../Model/Contact.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  nbrContact:number=0
  page:number=1
  liste : Contact[]=[]
  constructor(
    private service:CrudService,
    private route:Router
  ) { }
  supprimerContact(contact:Contact){
    if (confirm("voulez-vous supprimer ce Contact ?"))
    {
      this.service.deleteContact(contact.id).subscribe(()=>{
        this.route.navigate(["/contact"]).then(()=>{
          window.location.reload()
        })
      })
    }
  }

  ngOnInit(): void {
    this.service.getContact().subscribe(contact=>{
      this.liste=contact
      this.nbrContact=contact.length
    })
  }

}
