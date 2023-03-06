import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  constructor(
    private service:CrudService,
    private route:Router
  ) { 
    this.user=this.service.userDetail()
  }

  ngOnInit(): void {
    console.log(this.user);
  }


}
