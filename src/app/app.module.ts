import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { FootPageComponent } from './foot-page/foot-page.component';
import { EditionComponent } from './edition/edition.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {FormsModule} from '@angular/forms';
import {EtudiantService} from './services/etudiant.service';
import {ConnexionService} from './services/connexion.service';
import { Erreur404Component } from './erreur404/erreur404.component';
import {ExtranetModule} from './extranet/extranet.module';
import { RgpdComponent } from './rgpd/rgpd.component';
import { ModifProfilComponent } from './modif-profil/modif-profil.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { GestiondataComponent } from './gestiondata/gestiondata.component';
import { HighchartsChartModule} from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    FootPageComponent,
    EditionComponent,
    ConnexionComponent,
    Erreur404Component,
    RgpdComponent,
    ModifProfilComponent,
    StatistiqueComponent,
    GestiondataComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ExtranetModule,
    HighchartsChartModule
  ],
  // declare les classses injectables (@injectable) == services
  providers: [EtudiantService, ConnexionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
