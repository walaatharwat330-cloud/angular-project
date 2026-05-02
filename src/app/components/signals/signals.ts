import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {


  // عرفت البروبيرتي علي اساس انها سيجنال ليها الجينارك تيب
  counter=signal<number>(0)
doubleCounter=computed(()=>this.counter()*2)

  increse(){
this.counter.update((x)=>x+1)


  }



  decrease(){
this.counter.update((x)=>x-1)

  }





}
