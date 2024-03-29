import { Component, OnInit } from '@angular/core';
import {ConnexionService} from '../services/connexion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public connect: ConnexionService) { }

  ngOnInit() {
  }
  getDroit(obj) {
    return JSON.parse(localStorage.getItem(obj)).droit;
  }
}
