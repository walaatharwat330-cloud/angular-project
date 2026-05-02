import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuth {

//step1
//behaviour subject
//بروبيرتي هاندلتها علي اساس انها اوبسرفابل
//UserPropBehavSubj:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)


//signals

userPropSignal=signal<boolean>(false)
  //call api  /login
  //res==>token
login(userName:string,pass:string){

  let token = '123333333'
  localStorage.setItem('myToken',token)
  //step2
 // this.UserPropBehavSubj.next(true)
 this.userPropSignal.set(true)
}

logout(){
    localStorage.removeItem('myToken')
    //step3
    //this.UserPropBehavSubj.next(false)
     this.userPropSignal.set(false)

}

get isUserLogged():boolean{
  return localStorage.getItem('myToken')?true:false
}
//step4
methodSubject(){
 // return this.UserPropBehavSubj

 return this.userPropSignal
}

}




