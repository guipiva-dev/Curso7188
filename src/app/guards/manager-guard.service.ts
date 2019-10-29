import { SecurityUtils } from './../utils/security.utils';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ManagerGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    return SecurityUtils.isInRole('manager');
  }
}
