import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForsideComponent } from './forside/forside.component';
import { StartsideComponent } from './startside/startside.component';
import { ProfilComponent } from './profil/profil.component';
import { BeskederComponent } from './beskeder/beskeder.component';

@NgModule({
  declarations: [
    AppComponent,
    ForsideComponent,
    StartsideComponent,
    ProfilComponent,
    BeskederComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
