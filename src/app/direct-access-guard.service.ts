import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class DirectAccessGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  // if (this.router.url == '/register') { //check token
  //   this.router.navigate(['review']);
  //   return false;
  // } else {
  //     this.router.navigate(['register']);
  //     return false;
  // }
  
  if(this.router.url !== '/register') {
    this.router.navigate(['register']);
    return false;
    // this.router.navigate(['review'])
  }
  return true;
}
  
}





// canActivate(
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//   // If the previous URL was blank, then the user is directly accessing this page
//   if (this.router.url !== '/register') {
//     this.router.navigateByUrl('/review'); // Navigate away to some other page
//     return false;
//   }
//   else{
//     this.router.navigate(['/']);
//   }

//   // return true;
// }