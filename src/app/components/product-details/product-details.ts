import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductStatic } from '../../services/product-static';
import { Iproduct } from '../../models/iproduct';
import { Location } from '@angular/common';
import { ProductsDynamic } from '../../services/products-dynamic';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  //step3 get id from url

currentId:number=0
productData:Iproduct|undefined ={} as Iproduct
 
//productDate=signal<Iproduct|undefined>({} as Iproduct)

currentIndex:number=0
arrOfIds:number[]=[]

//بعمل injection
constructor(
  private active:ActivatedRoute, //service جاهزه بتاخد البرام من ال url عن طريق السكرينشوت
  private prdService:ProductStatic,
  private locate:Location,
  private router:Router,
  private prdWithApi:ProductsDynamic,
  private cd:ChangeDetectorRef
){

//this.currentId =Number(this.active.snapshot.paramMap.get('idFromUrl')) هاخد منها ال id  اللي بيتغير وهبعتها للسيرفيس اللي بتجيب الديتيلز اللي هيا بي ار دي سيرفس وبتاخد من الاي دي عشان يردعلي اوبجكت فالاخر بخزنه فالبرودكت ديتيل 
//routing abservable[بكونكت عليها عن طريق ميثود البرام وبتاخد subscribe او unsubscribe]
//بدل ما كان بياخد سكرينششوت مرا واحده بقي علي طول 
this.active.params.subscribe((x)=>{
  this.currentId =x['idFromUrl']
console.log(this.currentId);



  //step4 //send id service
  //this.productData= this.prdService.getProductbyId(this.currentId)
  //day6
  this.prdWithApi.getProductById(this.currentId).subscribe((data)=>{
    this.productData=data
    this.cd.detectChanges();
  })
  
  console.log(this.prdService.getProductbyId(this.currentId))
  
})


this.arrOfIds= this.prdService.getAllIds()
console.log(this.arrOfIds);

}

//فكرة الpagination انه يكون معايا اراري فيها كل الايديهات واحدد منها الاندكس الحالي عشان اتحرك يمين او شمال 
goPrev(){

 this.currentIndex = this.arrOfIds.indexOf(this.currentId)
 console.log(this.currentIndex);
 
//همسك الاراي وهبصيلها الكارنت انديكس
this.router.navigate(['/product-parent/',this.arrOfIds[--this.currentIndex]])
}

goNext(){
this.currentIndex = this.arrOfIds.indexOf(this.currentId)
 console.log(this.currentIndex);
 
//همسك الاراي وهبصيلها الكارنت انديكس
this.router.navigate(['/product-parent/',this.arrOfIds[++this.currentIndex]])

}

goBack(){
this.locate.back()
 }
}
