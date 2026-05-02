import { Component } from '@angular/core';
import { User } from '../../services/user';
import { Iuser } from '../../models/iuser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-signup',
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven-signup.html',
  styleUrl: './template-driven-signup.css',
})
export class TemplateDrivenSignup {

//هعمل بروبرتي هخزن فيها الداتا اللي هعملها submit
userProp:Iuser={} as Iuser



//هنشوف ال سيرفس عن طريق ال dependancy injection ودي رقم 2

constructor(private userService:User){}



AddNewUser(){

  //   الاوبجكت دا ببعته للميثود اللي موجوده فالسيرفس اللي اسمها يوزر
// let u:Iuser={
//   fname:'ahmed',
//   lname:'ali',
//   email:'email',
//   password:'password'
// }

this.userService.AddNewUser(this.userProp).subscribe((data)=>{
  console.log(data);
  
})

}


}
