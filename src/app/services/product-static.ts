import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
//service متشاف علي مستوي البروجكت
@Injectable({
  providedIn: 'root',
})
export class ProductStatic {

productProp:Iproduct[]


  constructor(){
 this.productProp = [{
        id: 1,
        productName: 'Apple iPhone 15',
        productImgURL:
          'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&width=240',
        productQuantity: 20,
        productPrice: 45000,
        CategoryID: 1,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
  },{ id: 2,
        productName: 'Samsung Galaxy frontend ',
        productImgURL:
          'https://f.nooncdn.com/p/pnsku/N70030440V/45/_/1702699238/6ae73ece-d29e-4a81-ba41-850055d0937f.jpg?format=avif&width=240',
        productQuantity: 2,
        productPrice: 200,
        CategoryID: 2,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
        },{ id: 3,
        productName: 'Apple iPhone 15',
        productImgURL:
          'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&width=240',
        productQuantity: 20,
        productPrice: 45000,
        CategoryID: 1,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
        },{ id: 4,
        productName: 'Apple iPhone 13',
        productImgURL:
          'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&width=240',
        productQuantity: 0,
        productPrice: 200,
        CategoryID: 1,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
        },{ id: 5,
        productName: 'Samsung Galaxy ',
        productImgURL:
          'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&width=240',
        productQuantity: 1,
        productPrice: 200,
        CategoryID: 2,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',}
        ]


  }
//getAllProducts(){}
getAllProducts():Iproduct[]{
  return this.productProp  //[{},{}]
}

//getProductbyId()
getProductbyId(id:number):Iproduct |undefined{
  return this.productProp.find((prd:Iproduct)=>prd.id==id)
}

//search ()
doSearch(value:string):Iproduct[]{
value = value.toLowerCase()
return this.productProp.filter((prd:Iproduct)=>
prd.productName.toLocaleLowerCase().includes(value))

}

getAllIds():number[]{
//array بيجمع كل الايديهات ف ليست عشان يشوف ال index يتحرك علي اساسه
  return  this.productProp.map((prd:Iproduct)=>prd.id)
}

}

