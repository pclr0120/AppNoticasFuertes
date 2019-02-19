import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia-preview',
  templateUrl: './noticia-preview.component.html',
  styleUrls: ['./noticia-preview.component.scss']
})
export class NoticiaPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hola(){
   alert("hola");
   
  }

}
