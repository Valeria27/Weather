import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CityIdGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate (route: ActivatedRouteSnapshot): boolean {
    let id= +route.url[1].path;
    if (isNaN(id)) {
      alert ("Invalid city Id");
      this._router.navigate(['/cities-list']);
      return false;
    }
    return true;
  }
}
