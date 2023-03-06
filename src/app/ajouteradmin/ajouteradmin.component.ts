import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/Router';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-ajouteradmin',
  templateUrl: './ajouteradmin.component.html',
  styleUrls: ['./ajouteradmin.component.css']
})
export class AjouteradminComponent implements OnInit {
  addForm: FormGroup
  userFile:any
  message?:String
  imgURL:any
  imagePath:any
  constructor(
     private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService) { 

      let formControls = {
        img: new FormControl('', [
          Validators.required,
  
        ]),
        nom: new FormControl('', [
          Validators.required,
  
        ]),
        prenom: new FormControl('', [
          Validators.required,
  
        ]),
        mdp: new FormControl('', [
          Validators.required,
  
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email
  
        ])
  
  
      }
      this.addForm = this.fb.group(formControls)
  
    }
    get email() { return this.addForm.get('email') }
    get img() { return this.addForm.get('img') }
    get nom() { return this.addForm.get('nom') }
    get prenom() { return this.addForm.get('prenom') }
    get mdp() { return this.addForm.get('mdp') }
    
    onSelectFile(event: any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.userFile = file;
    
  
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
          this.message = 'Sauf les images sont acceptés.';
          return;
        }
  
        var reader = new FileReader();
  
        this.imagePath = file;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.imgURL = reader.result;
        };
      }
    }
    registerAdmin() {
      let data = this.addForm.value;
      console.log(data);
      let admin = new Admin(
         undefined ,data.nom,this.imgURL,data.prenom, data.email, data.mdp);
         console.log(admin);
      if(data.nom==0||data.prenom==0||data.email==0||data.mdp==0||this.imgURL==0)
      {this.toast.info({
        detail:'error msg !!',
        summary:'remplir votre champs'
      });}else{
        
      this.service.addAdmin(admin).subscribe(

  
        res => {
          console.log(res);
          this.toast.success({
            detail:'success msg',
            summary:'Ajout avec Succés'
          });
          this.router.navigate(['/administrateur']);
        },
        err => {
          console.log(err);
          this.toast.error({
            detail:'error msg',
            summary:'verifier votre formulaire !'
          });
  
        }
  
      )
    }
  
    }
  
    ngOnInit(): void {
    }
  
  }
