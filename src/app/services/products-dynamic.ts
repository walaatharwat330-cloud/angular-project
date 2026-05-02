import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsDynamic {
// بيعمل ريكويست لل api
constructor(private http:HttpClient){



}


getAllProducts():Observable<Iproduct[]>{

return  this.http.get<Iproduct[]>(`${environment.baseUrl}products`); 
}

getProductById(id:number):Observable<Iproduct>{
return this.http.get<Iproduct>(`${environment.baseUrl}products/${id}`)

}

FilterByName(value:string):Observable<Iproduct[]>{
 return  this.http.get<Iproduct[]>(`${environment.baseUrl}products?productName=${value}`); 
}
}
