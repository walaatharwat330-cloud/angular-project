import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { Imgstyle } from '../../directives/imgstyle';
import {CommonModule } from '@angular/common';
import { CreditCardPipe } from '../../pipes/credit-card-pipe';
import { ProductStatic } from '../../services/product-static';
import { Router, RouterLink, RouterModule } from "@angular/router";
import { ProductsDynamic } from '../../services/products-dynamic';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [FormsModule, CommonModule, Imgstyle, CreditCardPipe, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products implements OnInit ,OnDestroy{



date:Date=new Date()

//productProp!:Iproduct[]  //هتجيلها داتا بعدشوية

//day7


productProp=signal<Iproduct[]>([])


constructor( private ProductStaticService:ProductStatic,
  private router:Router,
   private prdWithApi:ProductsDynamic,
   private cdr:ChangeDetectorRef
  ){
  // this.productProp = [{
  //       productID: 1,
  //       productName: 'Apple iPhone 15',
  //       productImgURL:
  //         'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&wproductIdth=240',
  //       productQuantity: 20,
  //       productPrice: 45000,
  //       CategoryID: 1,
  //       productDetails:
  //         'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
  // },{ productID: 2,
  //       productName: 'Samsung Galaxy frontend ',
  //       productImgURL:
  //         'https://f.nooncdn.com/p/pnsku/N70030440V/45/_/1702699238/6ae73ece-d29e-4a81-ba41-850055d0937f.jpg?format=avif&wproductIdth=240',
  //       productQuantity: 2,
  //       productPrice: 200,
  //       CategoryID: 2,
  //       productDetails:
  //         'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
  //       },{ productID: 3,
  //       productName: 'Apple iPhone 15',
  //       productImgURL:
  //         'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&wproductIdth=240',
  //       productQuantity: 20,
  //       productPrice: 45000,
  //       CategoryID: 1,
  //       productDetails:
  //         'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
  //       },{ productID: 4,
  //       productName: 'Apple iPhone 13',
  //       productImgURL:
  //         'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&wproductIdth=240',
  //       productQuantity: 0,
  //       productPrice: 200,
  //       CategoryID: 1,
  //       productDetails:
  //         'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
  //       },{ productID: 5,
  //       productName: 'Samsung Galaxy ',
  //       productImgURL:
  //         'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&wproductIdth=240',
  //       productQuantity: 1,
  //       productPrice: 200,
  //       CategoryID: 2,
  //       productDetails:
  //         'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',}
  //       ]
       // this.productAfterSearch = this.productProp
}

//day7
dataPrd!:Subscription



  ngOnDestroy(): void {

   this.dataPrd.unsubscribe()
  }
  ngOnInit(): void {
    //this.productProp =this.ProductStaticService.getAllProducts()
    //day6 الداتا جايه دينامك
    // this.prdWithApi.getAllProducts().subscribe({
    //  next: (next)=>{
    //   console.log(next);
      
    //  },
    //  error:()=>{},
    //  complete:()=>{}
    // })
     

    //observer
    this.dataPrd = this.prdWithApi.getAllProducts().subscribe((data)=>{
      console.log(data);

      //day7
      this.productProp.set(data)
      
        // this.productAfterSearch = this.productProp
         this.productAfterSearch.set(this.productProp())

         // this.cdr.detectChanges()
    })
  }


decreaseQuantity(item: Iproduct) {
  if (item.productQuantity > 0) {
    item.productQuantity--;
  }
}

//day3
//step3

//productAfterSearch:Iproduct[] =[]

//day7
productAfterSearch=signal<Iproduct[]>([])



//step2
//filterProduct:string = ''
//دي الفاليو الجاية من ال html وبباصيها للدوسيرش
//day4 بستقبل الداات من ال child 
@Input() set filterProduct(valueSet:string){
 // this.doSearch(valueSet)

 // this.productAfterSearch = this.doSearch(valueSet)
//  this.productAfterSearch=this.ProductStaticService.doSearch(valueSet)





//day6 Daynamic data
this.prdWithApi.getAllProducts().subscribe((data)=>{
 //this.productAfterSearch =  data.filter((prd:Iproduct)=>prd.productName.toLocaleLowerCase().includes(valueSet))
this.productAfterSearch.set(data.filter((prd:Iproduct)=>prd.productName.toLocaleLowerCase().includes(valueSet),))

//this.cdr.detectChanges();
 })

//step1 
// doSearch(value:string):Iproduct[]{
// value = value.toLowerCase()
// return this.productProp.filter((prd:Iproduct)=>
// prd.productName.toLocaleLowerCase().includes(value))

 }
credit:string="000000000000"

//day4
//child to parent @Output
//1-create event 
//custom event
//عملنا بروبرتي عادية وقلنا نوعها EVENTEMITTER  وبديله انيشيال فاليو (INSTANCE))وبيكون جينرك نوعه انترفيس
@Output() prdEvent :EventEmitter<Iproduct>=new EventEmitter<Iproduct>
//2-fire event
AddToCartInChild(prd:Iproduct){
// بعد كدا همسك الايفنت هنا وهعمله فاير

this.prdEvent.emit(prd)//هياخد الاوبجكت اللي ضفته
}


}




