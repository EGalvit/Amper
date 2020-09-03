import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForsideComponent } from './forside/forside.component';
import { StartsideComponent } from './startside/startside.component';
import { ProfilComponent } from './profil/profil.component';
import { BeskederComponent } from './beskeder/beskeder.component';
import { IndstillingerComponent } from './indstillinger/indstillinger.component';
import { DiscoverComponent } from './discover/discover.component';

import { AuthenticationGuard } from "./helpers/authentication.guard";


const routes: Routes = [
  { path: '', component: StartsideComponent},
  { path: 'discover', component: DiscoverComponent, canActivate:[AuthenticationGuard]},
  { path: 'forside', component: ForsideComponent, canActivate:[AuthenticationGuard]},
  { path: 'profil/:id', component: ProfilComponent, canActivate:[AuthenticationGuard]},
  { path: 'beskeder', component: BeskederComponent, canActivate:[AuthenticationGuard]},
  { path: 'indstillinger', component: IndstillingerComponent, canActivate:[AuthenticationGuard]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
