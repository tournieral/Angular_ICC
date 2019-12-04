import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {Etudiant} from '../interfaces/identification';

@Component({
  selector: 'app-modif-profil',
  templateUrl: './modif-profil.component.html',
  styleUrls: ['./modif-profil.component.css']
})
export class ModifProfilComponent implements OnInit {
  etud: Etudiant;

  constructor(private route: Router) { }

  ngOnInit() {
    let obj = '';
    if (this.getDroit('user') === '2') {
      obj = 'user';
    } else {
      obj = 'etudiant';
    }
      this.etud = {
        nom: this.getNom(obj),
        prenom: this.getPrenom(obj),
        option: this.getOption(obj),
        genie: this.getGenie(obj),
        age: this.getAge(obj),
        annee_diplome: this.getDiplome(obj),
        salaire: this.getSalaire(obj),
        poste: this.getPoste(obj),
        entreprise: this.getEntreprise(obj),
        lieux: this.getLieux(obj),
        img: this.getImg(obj),
      };
    }

  getNom(obj) {
    return JSON.parse(localStorage.getItem(obj)).nom;
}
  getPrenom(obj) {
    return JSON.parse(localStorage.getItem(obj)).prenom;
  }
  getAge(obj) {
    return JSON.parse(localStorage.getItem(obj)).age;
  }
  getOption(obj) {
    return JSON.parse(localStorage.getItem(obj)).option;
  }
  getSalaire(obj) {
    return JSON.parse(localStorage.getItem(obj)).salaire;
  }
  getLieux(obj) {
    return JSON.parse(localStorage.getItem(obj)).lieux;
  }
  getEntreprise(obj) {
    return JSON.parse(localStorage.getItem(obj)).entreprise;
  }
  getPoste(obj) {
    return JSON.parse(localStorage.getItem(obj)).poste;
  }
  getDiplome(obj) {
    return JSON.parse(localStorage.getItem(obj)).annee_diplome;
  }
  getImg(obj) {
    return JSON.parse(localStorage.getItem(obj)).img;
  }
  getGenie(obj) {
    return JSON.parse(localStorage.getItem(obj)).genie;
  }
  getPwd(obj) {
    return JSON.parse(localStorage.getItem(obj)).pwd;
  }
  getDroit(obj) {
    return JSON.parse(localStorage.getItem(obj)).droit;
  }
  getId(obj) {
    return JSON.parse(localStorage.getItem(obj)).id;

  }

  modification(obj) {
    const identifiant = this.getId(obj);
    const mdp = this.getPwd(obj);
    const droits = this.getDroit(obj);

    localStorage.setItem(obj, JSON.stringify({
      id : identifiant,
      pwd : mdp,
      droit : droits,
      nom : this.etud.nom,
      prenom : this.etud.prenom,
      option : this.etud.option,
      genie : this.etud.genie,
      age : this.etud.age,
      annee_diplome : this.etud.annee_diplome,
      salaire : this.etud.salaire,
      poste : this.etud.poste,
      entreprise : this.etud.entreprise,
      lieux : this.etud.lieux,
      img : this.etud.img,
    }));
    console.log(localStorage);

  }
  annonimiser(obj) {
    const identifiant = this.getId(obj);
    const mdp = this.getPwd(obj);
    const droits = this.getDroit(obj);
    localStorage.setItem(obj, JSON.stringify({
      id : identifiant,
      pwd : mdp,
      droit : droits,
      nom: '*******',
      prenom: '******',
      option : this.etud.option,
      genie : this.etud.genie,
      age : this.etud.age,
      annee_diplome : this.etud.annee_diplome,
      salaire : this.etud.salaire,
      poste : this.etud.poste,
      entreprise : this.etud.entreprise,
      lieux : this.etud.lieux,
      img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/433px-Anonymous.svg.png'
    }));
  }
  supprimer() {
    localStorage.setItem('supp', JSON.stringify({
      supp : 'true',
      etudiant:  this.getPrenom('etudiant')
    }));
    this.route.navigate(['/accueil']);
    console.log(localStorage);
  }
}
