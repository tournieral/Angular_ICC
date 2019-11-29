import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EtudiantService} from '../services/etudiant.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {

numero: number;
  constructor(public etudServ: EtudiantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (p) => {
        console.log(p['index']);
        this.numero = +p['index'];
      }
    );
  }

}
