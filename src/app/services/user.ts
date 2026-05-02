import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Iuser } from '../models/iuser';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class User {
httpHeaderes={}

  constructor(private http:HttpClient){
this.httpHeaderes = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
     // 'authorization':token
    })


}
    
  }


AddNewUser(newUser:Iuser):Observable<Iuser>{

  return  this.http.post<Iuser>(`${environment.baseUrl}users`,newUser,this.httpHeaderes).pipe(retry(2))
}

}
