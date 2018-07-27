import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { FuentesComponent } from '../fuentes/fuentes.component';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

color:string;
local:string = String(window.location);

miRGB(variableLocal:string = this.local){
  if(variableLocal.includes("fuentes")){
    this.color="url('http://www.gamefactor.mx/images/productos/Fuentes/PSG650/specs/fuente-de-poder-650-watts-80-plus-game-factor-PSG650-sp-01.jpg')";
  }
  if(variableLocal.includes("gabos")){
    this.color="url('https://i.ytimg.com/vi/ayjtg_O2xJI/maxresdefault.jpg')";
  }
  if(variableLocal.includes("memorias")){
    this.color="url('https://www.muycomputer.com/wp-content/uploads/2016/03/memoriaRAM-840x473.jpg')";
  }
  if(variableLocal.includes("procesadores")){
    this.color="url('https://raanmavi.com/wp-content/uploads/2015/01/amd-vs-intel_576x303.jpeg')";
  }
  if(variableLocal.includes("motherboard")){
    this.color="url('https://asset.msi.com/event/mb/2017/best200series/images/mdx299-ta2.jpg')";
  }
  if(variableLocal.includes("gpu")){
    this.color="url('https://www.gamersnexus.net/media/k2/items/cache/c21475a58488c2d65cf7e5e9c57b78a1_XL.jpg')";
  }
  
  return this.color;
}

  constructor() {
   }

  ngOnInit() {
  }

}
