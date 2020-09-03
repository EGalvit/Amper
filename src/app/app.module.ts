import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ForsideComponent } from './forside/forside.component';
import { StartsideComponent } from './startside/startside.component';
import { ProfilComponent } from './profil/profil.component';
import { BeskederComponent } from './beskeder/beskeder.component';
import { IndstillingerComponent } from './indstillinger/indstillinger.component';
import { DiscoverComponent } from './discover/discover.component';

import { AuthenticationService } from "./helpers/authentication.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent,
    ForsideComponent,
    StartsideComponent,
    ProfilComponent,
    BeskederComponent,
    IndstillingerComponent,
    DiscoverComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
