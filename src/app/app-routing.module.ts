import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForsideComponent } from './forside/forside.component';
import { StartsideComponent } from './startside/startside.component';
import { ProfilComponent } from './profil/profil.component';
import { BeskederComponent } from './beskeder/beskeder.component';
import { IndstillingerComponent } from './indstillinger/indstillinger.component';


const routes: Routes = [
  { path: '', component: StartsideComponent},
  { path: 'forside', component: ForsideComponent},
  { path: 'profil', component: ProfilComponent},
  { path: 'beskeder', component: BeskederComponent},
  { path: 'indstillinger', component: IndstillingerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
