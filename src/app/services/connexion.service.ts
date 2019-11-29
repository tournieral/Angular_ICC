import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  isco: boolean;

  constructor() {
    this.isco = false;
  }
}
