import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ParentComponent } from './components/parent-component/parent-component';
import { Notfound } from './components/notfound/notfound';
import { ProductDetails } from './components/product-details/product-details';
import { TemplateDrivenSignup } from './components/template-driven-signup/template-driven-signup';
import { ReactiveFormSignup } from './components/reactive-form-signup/reactive-form-signup';
import { authGuard } from './Guard/auth-guard';

export const routes: Routes = [

//default route http://localhost:4200/
{path:'',redirectTo:'home',pathMatch:'full'},

{path:'home',component:Home,title:'home page'},
//http://localhost:4200/

{path:'product-parent',component:ParentComponent,title:"product",
  canActivate :[authGuard] 
},
//http://localhost:4200/product-parent

//step1
{path:'product-parent/:idFromUrl',component:ProductDetails,canActivate:[authGuard]},
//dynamic route

{path:'signup',component:ReactiveFormSignup},

//wild card == not found
{path:'**',component:Notfound}



];
