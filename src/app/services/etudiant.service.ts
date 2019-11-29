import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  etudiant: Array<object>;
  constructor(private http: HttpClient) {
    this.etudiant = [];

    // Gestion Ajax
    this.http.get<Array<object>>('assets/datas/etudiant.json').subscribe(
      etu => {
        console.log(etu);
        this.etudiant = etu;

      }
    );
  }


}
