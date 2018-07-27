import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ochentaplus-bronze',
  templateUrl: './ochentaplus-bronze.component.html',
  styleUrls: ['./ochentaplus-bronze.component.css']
})
export class OchentaplusBronzeComponent implements OnInit {

//--------------- inicia progra

object = {
  id: 1,
  funcion: this.funcion()
};

funcion(){
  console.log("sdasda");
}

arrayImagenes: string[] = ['https://www.hd-tecnologia.com/imagenes/articulos/2013/07/EVGA-500-Bronze.png',
'https://http2.mlstatic.com/S_798311-MLM20532130055_122015-O.jpg',
'https://tiendaakiba.com/image/data/partes-de-computador/fuentes-de-poder/fuente-de-poder-aerocool-kcas-600w-80-plus-bronze-atx-foto-3.jpg',
'https://www.pchmayoreo.com/media/catalog/product/cache/1/image/270x270/9df78eab33525d08d6e5fb8d27136e95/e/n/en-385893-1.jpg',
'https://tiendaakiba.com/image/data/partes-de-computador/fuentes-de-poder/fuente-de-poder-seasonic-s12ii-520-520w-80-plus-bronze-atx-foto-1.jpg',
'https://www.cyberpuerta.mx/img/product/M/CP-GIGABYTE-GP-B700H-1.jpg'];

arrayNombres: string[] = ["Fuente de Poder EVGA 80 PLUS BRONZE",
  "Fuente de CORSAIR poder  80 PLUS BRONZE",
  "Fuente de poder AEROCOOL KCAS 80 PLUS BRONZE",
  "Fuente de poder GAME FACTOR 80 PLUS BRONZE",
  "Fuente de poder SEASONIC 80 PLUS BRONZE",
  "Fuente de poder GIGABYTE 80 PLUS BRONZE"];

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
