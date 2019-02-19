import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

slideOpts = {
  
  slidesPerView:5,
  autoplay:true,
  loop:true,
  //speed:200,
  width:750,
  //watchOverflow:false,





};

hola(){

  alert("hola");
}
constructor() {}
}
