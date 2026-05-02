import { Component } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { User } from '../../services/user';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { email, validate } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-form-signup',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './reactive-form-signup.html',
  styleUrl: './reactive-form-signup.css',
})
export class ReactiveFormSignup {
//userProp: any;

//userProp:Iuser={} as Iuser
 UserProp:FormGroup 


constructor(private userService:User,private FormBuilder:FormBuilder ){
  //  this.UserProp=new FormGroup({
  //   fname: new FormControl('',[Validators.required,Validators.minLength(3)]),
  //   lname: new FormControl('',[Validators.required]),
  //     email: new FormControl(''),
  //     password:new FormControl('')

  //  })

  this.UserProp= this.FormBuilder.group({
fname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lname: new FormControl('',[Validators.required]),
      email: new FormControl(''),
    password:new FormControl('')



  })

}


get fnameInput(){

 return this.UserProp.get('fname')
}

AddNewUser(){

  //   الاوبجكت دا ببعته للميثود اللي موجوده فالسيرفس اللي اسمها يوزر
// let u:Iuser={
//   fname:'ahmed',
//   lname:'ali',
//   email:'email',
//   password:'password'
// }

this.userService.AddNewUser(this.UserProp.value).subscribe((data)=>{
  console.log(data);
  
})

}
}
