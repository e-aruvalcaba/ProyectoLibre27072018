import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ochentaplus-silver',
  templateUrl: './ochentaplus-silver.component.html',
  styleUrls: ['./ochentaplus-silver.component.css']
})
export class OchentaplusSilverComponent implements OnInit {

//--------------- inicia progra

object = {
  id: 1,
  funcion: this.funcion()
};

funcion(){
  console.log("sdasda");
}

arrayImagenes: string[] = ['https://www.hd-tecnologia.com/imagenes/articulos/2013/07/EVGA-500-Bronze.png',
'https://www.corsair.com/medias/sys_master/images/images/hd7/hb7/8846194245662/-CP-9020140-NA-Gallery-HX1200-01.png',
'https://http2.mlstatic.com/fuente-de-poder-aerocool-kcas-750w-rgb-80-plus-gold-D_NQ_NP_630550-MLM26572872712_122017-F.jpg',
'https://ddtech.mx/assets/uploads/44fdffa2ec26b3c3c382c45bb9795eea.jpg',
'https://ddtech.mx/assets/uploads/06f0aac8a69314e9355d27d5771b2c66.jpg',
'data:image/jpeg;base64,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'];

arrayNombres: string[] = ["Fuente de Poder EVGA 80 PLUS SILVER",
  "Fuente de poder CORSAIR 80 PLUS SILVER",
  "Fuente de poder AEROCOOL KCAS 80 PLUS SILVER",
  "Fuente de poder SEASONIC 80 PLUS SILVER",
  "Fuente de poder AEROCOOL X 80 PLUS SILVER",
  "Fuente de poder COOLER MASTER 80 PLUS SILVER"];

arrayPrecios: string[] = ["1250",
  "1050",
  "1250",
  "900",
  "1100",
  "750"];

inicializar() {
for (var i = 0; i < 6; i++) {

  if (!this['divColumna' + i]) {
    //Crear el div que contendra los diferentes elementos a mostrar img, bttn y p
    this['divColumna' + i] = document.createElement('div');
    this['divColumna' + i].id = "divColumna" + (i + 1);
    this['divColumna' + i].className = 'col-6';

    //crear la p que contendra el nombre de nuestro producto en la vista
    this['laP1' + i] = document.createElement('p');
    this['laP1' + i].id = "laP1" + (i + 1);
    this['laP1' + i].textContent = this.arrayNombres[i];

    //crear el image dinamico que contendra la imagen del producto
    this['imgColumna' + i] = document.createElement('img');
    this['imgColumna' + i].id = "imgColumna" + (i + 1);
    this['imgColumna' + i].className = 'imgPrueba col-6';
    this['imgColumna' + i].src = this.arrayImagenes[i];
    this['imgColumna' + i].style.border = "outset";
    this['imgColumna' + i].style.display = "block";


    //crear boton para la compra del articulo

    this['button' + i] = document.createElement('button');
    this['button' + i].id = i + 1;
    this['button' + i].textContent = "Agregar a Carrito";
    this['button' + i].nombre = this.arrayNombres[i];
    this['button' + i].onclick = function () {
      alert("Se agrego el producto "+ this.nombre  +" al carrito");
    }

    //crear la p que contendra el precio de nuestro boton en la vista
    this['laP' + i] = document.createElement('p');
    this['laP' + i].id = "laP" + (i + 1);
    this['laP' + i].textContent = this.arrayPrecios[i];

    //document.getElementById("#columna").appendChild(this['button'+i]);
    document.getElementById("columna").appendChild(this['divColumna' + i]);
    //agregar la P al div contenedor correspondiente
    document.getElementById("divColumna" + (i + 1)).appendChild(this['laP1' + i]);
    //agregamos al dom en el div columna actual un img que contendra la imgen del producto
    document.getElementById("divColumna" + (i + 1)).appendChild(this['imgColumna' + i]);
    //agregar el boton al div columna despues del img
    document.getElementById("divColumna" + (i + 1)).appendChild(this['button' + i]);
    //agregar la P al div contenedor correspondiente
    document.getElementById("divColumna" + (i + 1)).appendChild(this['laP' + i]);
  }
}
}


//----------------- termina progra



  constructor() { }

  ngOnInit() {
  }

}
