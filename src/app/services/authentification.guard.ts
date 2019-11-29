import { Injectable } from '@angular/core';
import {CanActivate, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {ConnexionService} from './connexion.service';
import { isNull} from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  constructor(
    private auth: ConnexionService,
    private route: Router,
) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.auth.isco) {
      console.log('Vous n\'êtes pas connectés');
      this.route.navigate(['/connexion']);
    }
    return this.auth.isco;
  }
}
