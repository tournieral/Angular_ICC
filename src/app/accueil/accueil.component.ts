import {Component, OnInit} from '@angular/core';
import {EtudiantService} from '../services/etudiant.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  constructor(public etudServ: EtudiantService) {}

  ngOnInit() {
  }
choixetudiant(e) {
  localStorage.setItem('etudiant', JSON.stringify({
    nom : e.nom,
    prenom : e.prenom,
    droit : e.droit,
    option : e.option,
    genie : e.genie,
    age : e.age,
    annee_diplome : e.annee_diplome,
    salaire : e.salaire,
    poste : e.post,
    entreprise : e.entreprise,
    lieux : e.lieux,
    img : e.img
  }));
  console.log(localStorage);
}

getSupp() {
    console.log(JSON.parse(localStorage.getItem('supp')).supp);
    return  JSON.parse(localStorage.getItem('supp')).supp;
}

getIdSupp() {
  console.log(JSON.parse(localStorage.getItem('supp')).etudiant);
  return  JSON.parse(localStorage.getItem('supp')).etudiant;
}
}
