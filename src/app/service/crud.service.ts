import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Admin } from '../Model/Admin.model';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Formateur } from '../Model/Formateur.model';
import { Entreprise } from '../Model/Entreprise.model';
import { Offre } from '../Model/Offre.model';
import { Contact } from '../Model/Contact.model';

const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/Json'})
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  registerAdminUrl = "http://localhost:8081/api/admin/registeradmin"
  loginAdminUrl="http://localhost:8081/api/admin/loginadmin"
  apiUrl="http://localhost:8081/api"
  helper=new JwtHelperService();
  constructor(
    private http: HttpClient,
  ) { }
  addAdmin(admin: Admin) {
    return this.http.post<any>(this.registerAdminUrl, admin);
  }

  loginAdmin(admin: Admin) {
    return this.http.post<any>(this.loginAdminUrl, admin);
  }

  getAdmins():Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl+"/admin")  
  }

  getFormateur():Observable<Formateur[]>{
    return this.http.get<Formateur[]>(this.apiUrl+"/formateur")  
  }

  getEntreprise():Observable<Entreprise[]>{
    return this.http.get<Entreprise[]>(this.apiUrl+"/entreprise")  
  }

  getOffre():Observable<Offre[]>{
    return this.http.get<Offre[]>(this.apiUrl+"/offre")  
  }

  deleteAdmin(id:number|undefined){
    const Url=`${this.apiUrl+"/admin"}/${id}`
    return this.http.delete(Url,httpOption)
  }

  deleteFormateur(idF:number|undefined){
    const Url=`${this.apiUrl+"/formateur"}/${idF}`
    return this.http.delete(Url,httpOption)
  }

  deleteOffre(id:number|undefined){
    const Url=`${this.apiUrl+"/offre"}/${id}`
    return this.http.delete(Url,httpOption)
  }

  deleteEntreprise(idE:number|undefined){
    const Url=`${this.apiUrl+"/entreprise"}/${idE}`
    return this.http.delete(Url,httpOption)
  }
  deleteContact(id:number|undefined){
    const Url=`${this.apiUrl+"/contact"}/${id}`
    return this.http.delete(Url,httpOption)
  }

  userDetail(){
    let token:any=localStorage.getItem('mytoken');
    let decotoken=this.helper.decodeToken(token);
    return decotoken.data
  }
  getContact():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiUrl+"/contact")  
  }
  updateAdmin(id:number,admin:Admin):Observable<Admin>{
    const Url=`${this.apiUrl+"/admin"}/${id}`
    return this.http.put<Admin>(Url,admin,httpOption)
  }
  public getAdminById(id : number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/admin/${id}`);
  }

  updateEnt(entreprise : Entreprise, idE:number) : Observable<Entreprise>{
    return this.http.put<Entreprise>(this.apiUrl + "/entreprise/"+idE , entreprise , httpOption)
    }

  updateOffre(offre : Offre, id:number) : Observable<Entreprise>{
    return this.http.put<Offre>(this.apiUrl + "/offre/"+id , offre , httpOption)
    }

}