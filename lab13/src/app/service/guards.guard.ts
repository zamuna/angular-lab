import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DbService } from './db.service'

@Injectable()
export class GuardsGuard implements CanActivate {
  constructor(private dbService: DbService, private route: ActivatedRoute, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (next.params['id']) {
      if (this.dbService.getStd(next.params['id']))
        return true;
      else
        this.router.navigate(['error']);
    }
    else {
      this.router.navigate(['error']);
    }
  }
}
