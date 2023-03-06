import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouteradminComponent } from './ajouteradmin/ajouteradmin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { FormateurComponent } from './formateur/formateur.component';
import { OffreComponent } from './offre/offre.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule  , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AjouteradminComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    EntrepriseComponent,
    FormateurComponent,
    OffreComponent,
    AdministrateurComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    ModifierAdminComponent,
    ProfileComponent,

    
  ],
  imports: [
    NgToastModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
