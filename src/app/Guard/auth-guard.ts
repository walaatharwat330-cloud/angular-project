import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../services/user-auth';

export const authGuard: CanActivateFn = (route, state) => {

  //عملت dependancy injection 
let userAuth=inject(UserAuth)
let router=inject(Router)

if(userAuth.isUserLogged){

 return true;

}else{

  alert('loginnnnnnnnnnnnnnnnnnn')
router.navigate(['/'])
return false;

}
 
};
