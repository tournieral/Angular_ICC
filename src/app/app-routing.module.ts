import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {AuthentificationGuard} from './services/authentification.guard';
import {Erreur404Component} from './erreur404/erreur404.component';
import {RgpdComponent} from './rgpd/rgpd.component';
import {ModifProfilComponent} from './modif-profil/modif-profil.component';
import {StatistiqueComponent} from './statistique/statistique.component';


const routes: Routes = [
  {path: '', component: ConnexionComponent},
  {path: 'accueil', component: AccueilComponent, canActivate: [AuthentificationGuard]},
  {path: 'rgpd', component: RgpdComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'modifprofil', component: ModifProfilComponent, canActivate: [AuthentificationGuard]},
  {path: 'statistique', component: StatistiqueComponent, canActivate: [AuthentificationGuard]},
  {path: '**', component: Erreur404Component}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
