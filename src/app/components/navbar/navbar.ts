import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { ProductStatic } from '../../services/product-static';
import { UserAuth } from '../../services/user-auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
isUserLogged=signal<boolean>(false)

constructor(private prdservice:ProductStatic,private Auth:UserAuth){

//this.isUserLogged=this.Auth.isUserLogged
// this.Auth.methodSubject().subscribe((data)=>{

// //this.isUserLogged = data
// this.isUserLogged.set(data)
// })

this.isUserLogged=this.Auth.methodSubject()
}

}
