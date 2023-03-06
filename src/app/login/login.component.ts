import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/Router';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService
  ) {
    let formControls = {
      mdp: new FormControl('', [
        Validators.required,

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ])


    }
    this.loginForm = this.fb.group(formControls)

  }
  get email() { return this.loginForm.get('email') }
  get mdp() { return this.loginForm.get('mdp') }
  
 loginAdmin() {
    let data = this.loginForm.value;
    console.log(data);
    let admin = new Admin(undefined ,undefined ,undefined ,undefined ,data.email, data.mdp);
       console.log(admin);
    if(data.email==0||data.mdp==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'remplir votre champs'
    });}else{
      
    this.service.loginAdmin(admin).subscribe(

      res => {
        console.log(res);
        let token=res.token;
        localStorage.setItem("mytoken",token);
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log(err);
        this.toast.error({
          detail:'error msg',
          summary:'admin introuvable !!!!'
        });

      }

    )
  }

  }
  ngOnInit(): void {
  }

}
