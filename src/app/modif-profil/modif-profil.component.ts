import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-modif-profil',
  templateUrl: './modif-profil.component.html',
  styleUrls: ['./modif-profil.component.css']
})
export class ModifProfilComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
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
      nom : document.getElementById('nom').value,
      prenom : document.getElementById('prenom').value,
      option : document.getElementById('option').value,
      genie : document.getElementById('genie').value,
      age : document.getElementById('age').value,
      annee_diplome : document.getElementById('diplome').value,
      salaire : document.getElementById('salaire').value,
      poste : document.getElementById('poste').value,
      entreprise : document.getElementById('entreprise').value,
      lieux : document.getElementById('lieux').value,
      img : document.getElementById('img').value
    }));

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
      option : document.getElementById('option').value,
      genie : document.getElementById('genie').value,
      age : document.getElementById('age').value,
      annee_diplome : document.getElementById('diplome').value,
      salaire : document.getElementById('salaire').value,
      poste : document.getElementById('poste').value,
      entreprise : document.getElementById('entreprise').value,
      lieux : document.getElementById('lieux').value,
      img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/433px-Anonymous.svg.png'
    }));
  }
  supprimer() {
    localStorage.setItem('supp', JSON.stringify({
      supp : 'true',
      etudiant: this.getPrenom('etudiant')
    }));
    this.route.navigate(['/accueil']);
    console.log(localStorage);
  }
}
