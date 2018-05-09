import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.angularFireAuth.authState.map(auth => {
      if (isNullOrUndefined(auth)) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    });
  }
}
