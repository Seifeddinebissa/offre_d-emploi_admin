import { Component, OnInit, ɵfindLocaleData } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/Router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../service/crud.service';
import { Admin } from '../Model/Admin.model';

@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.css']
})
export class ModifierAdminComponent implements OnInit {
 id: any;
 currentAdmin=new Admin()
 userFile:any
  message?:String
  imgURL:any
  imagePath:any
  constructor(
     private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService,
    private rout:ActivatedRoute) { 
  
    }

     
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
          this.currentAdmin.img=this.imgURL
        };
      }
    }
   modifierAdmin(){
    this.id=this.rout.snapshot.params["id"];
    console.log(this.id);
    this.service.updateAdmin(this.id,this.currentAdmin).subscribe(admin=>{
      this.service.loginAdmin(this.currentAdmin).subscribe(res=>{
        let token=res.token;
        localStorage.setItem("mytoken",token)
      })
      this.router.navigate(["/administrateur"]).then(()=>{
        window.location.reload();
      })
    })
   }
    
  ngOnInit(): void {
    this.id=this.rout.snapshot.params["id"];
    this.getAdmin(this.id);
  }
  getAdmin(id:number)
  {
    this.service.getAdminById(id).subscribe(data=>{
      this.currentAdmin=data

    })
  }
}
