import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/identification';
import {ConnexionService} from '../services/connexion.service';
import {EtudiantService} from '../services/etudiant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  identification: User;
  constructor( public connectServ: ConnexionService, public etudServ: EtudiantService, private route: Router) { }

  ngOnInit() {
    this.identification = {
      id: '',
      pwd: '',
    };
    localStorage.clear();
    localStorage.setItem('supp', JSON.stringify({supp : 'false', etudiant : ''}));
    localStorage.setItem('etudiant', JSON.stringify({nom : ''}));
  }

  authentification() {
    localStorage.setItem('user', JSON.stringify({login : this.identification.id , pwd : this.identification.pwd}));
    const tab: Array<any> = this.etudServ.etudiant;
    for ( let index of tab) {
      if (index.id === this.getLogin() && index.pwd === this.getPwd()) {
        const droit = index.droit;
        if (droit === '2') {
          this.Loadetuddata(index);
        }
        if (droit === '1') {
          this.Loadprofdata(index);
        }
        this.connectServ.isco = true;
        break;
      }
    }
  }

  public getLogin() {
    return JSON.parse(localStorage.getItem('user')).login;
  }
  public getPwd() {
    return JSON.parse(localStorage.getItem('user')).pwd;
  }

  deco() {
    this.connectServ.isco = false;
  }
   Loadetuddata(user) {
      localStorage.setItem('user', JSON.stringify({
        nom : user.nom,
        prenom : user.prenom,
        droit : user.droit,
        option : user.option,
        genie : user.genie,
        age : user.age,
        annee_diplome : user.annee_diplome,
        salaire : user.salaire,
        poste : user.post,
        entreprise : user.entreprise,
        lieux : user.lieux,
        img : user.img
      }));
    }
  Loadprofdata(user) {
    localStorage.setItem('user', JSON.stringify({
      nom : user.nom,
      prenom : user.prenom,
      droit : user.droit,
      option : user.option,
    }));
  }
}

