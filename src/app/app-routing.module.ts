import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { ForsideComponent } from './forside/forside.component';
import { StartsideComponent } from './startside/startside.component';
import { ProfilComponent } from './profil/profil.component';
import { BeskederComponent } from './beskeder/beskeder.component';
import { IndstillingerComponent } from './indstillinger/indstillinger.component';
import { DiscoverComponent } from './discover/discover.component';
import { TestingComponent } from './testing/testing.component'
import { SearchComponent } from './search/search.component'

import { AuthenticationGuard } from "./helpers/authentication.guard";


const routes: Routes = [
  { path: '', component: StartsideComponent},
  { path: 'discover', component: DiscoverComponent, canActivate:[AuthenticationGuard]},
  { path: 'forside', component: ForsideComponent, canActivate:[AuthenticationGuard]},
  { path: 'profil/:id', component: ProfilComponent, canActivate:[AuthenticationGuard]},
  { path: 'beskeder/:messageid', component: BeskederComponent, canActivate:[AuthenticationGuard], runGuardsAndResolvers: 'always'},
  { path: 'indstillinger', component: IndstillingerComponent, canActivate:[AuthenticationGuard]},
  { path: 'search', component: SearchComponent, canActivate:[AuthenticationGuard]},
  { path: 'testing', component: TestingComponent, canActivate:[AuthenticationGuard]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
