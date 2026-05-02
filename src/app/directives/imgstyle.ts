import { Directive, ElementRef, HostListener, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appImgstyle]',
})
export class Imgstyle {

  
  //دي اللي بتخليني امسك الدوم وبتكون جاهزه
  constructor(public elem:ElementRef) {
//document.getelementbyid.style
this.elem.nativeElement.style.border = "2px solid gray"
this.elem.nativeElement.style.borderRadius = "12px"
this.elem.nativeElement.style.boxShadow = "0 10px 25px rgba(14, 50, 252, 0.39)";
  }

 
//method decorator بتاخد اسم الايفنت 
@HostListener ('mouseover') mouseOver(){
  this.elem.nativeElement.style.boxShadow = "0 30px 40px rgba(14, 252, 105, 0.39)";

}
@HostListener('mouseout') mouseOut(){
  this.elem.nativeElement.style.boxShadow = "0 10px 25px rgba(14, 50, 252, 0.39)";

}
}
