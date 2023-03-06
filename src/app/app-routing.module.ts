import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/Router';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AjouteradminComponent } from './ajouteradmin/ajouteradmin.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { FormateurComponent } from './formateur/formateur.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { OffreComponent } from './offre/offre.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent},
  { path: 'ajouterAdmin', component: AjouteradminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'entreprise', component: EntrepriseComponent },
  {path:'formateur',component:FormateurComponent},
  {path:'offre',component:OffreComponent},
  {path:'administrateur',component:AdministrateurComponent},
  {path:'contact',component:ContactComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'modifierAdmin/:id',component:ModifierAdminComponent},
  {path:'profile',component:ProfileComponent},
  {path:'**',component:LoginComponent}


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }