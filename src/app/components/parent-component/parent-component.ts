import { Component } from '@angular/core';
import { Products } from '../products/products';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-parent-component',
  imports: [Products,FormsModule],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {


  searchInParent:string =''

  prdList:Iproduct[]=[]
items: any;

  AddToCartInParent(prd:Iproduct){

    let obj = this.prdList.find((items:Iproduct)=>items.id==prd.id)
   if(obj){
    obj.productQuantity++ ;
    obj.totalPrice = obj.productQuantity * obj.productPrice
   }else{

    this.prdList.push({...prd,
      productQuantity :1,
      totalPrice:prd.productPrice,
    });
   }

  
console.log(this.prdList);


  }
 //removeItem(id:number){
  //  this.prdList = this.prdList.filter(item=>item.id !==id);
  //}
  decreaseItem(id: number) {

  let obj = this.prdList.find(
    item => item.id === id
  );

  if (obj) {

    obj.productQuantity--;

    //  لو الكمية بقت 0 نحذفه
    if (obj.productQuantity <= 0) {
      this.prdList = this.prdList.filter(
        item => item.id !== id
      );
    } else {
      //  نحدث السعر
      obj.totalPrice = obj.productQuantity * obj.productPrice;
    }

  }
}
}
