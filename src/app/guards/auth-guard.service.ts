import { SecurityUtils } from './../utils/security.utils';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (!SecurityUtils.hasToken()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
