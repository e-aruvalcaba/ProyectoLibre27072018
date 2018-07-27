import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ochentaplus-gold',
  templateUrl: './ochentaplus-gold.component.html',
  styleUrls: ['./ochentaplus-gold.component.css']
})
export class OchentaplusGoldComponent implements OnInit {

  //--------------- inicia progra

  object = {
    id: 1,
    funcion: this.funcion()
  };

  funcion() {
    console.log("sdasda");
  }

  arrayImagenes: string[] = ['http://www.toppc.cl/tienda/1951-large_default/fuente-de-poder-evga-1000-g-1000w-modular-80-plus-gold.jpg',
'https://images.pcel.com/300/omr1X6ezbDPQ0zw6.jpg',
'https://smartgamer.co/wp-content/uploads/2018/01/ACFP011-FUENTE-DE-PODER-AEROCOOL-KCAS-850GM-RGB-FULL-RANGE-APFC-Semi-Modular-800x800.png',
'https://www.cyberpuerta.mx/img/product/M/CP-SEASONIC-X-750-1.jpg',
'data:image/jpeg;base64,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',
'data:image/jpeg;base64,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'];

  arrayNombres: string[] = ["Fuente de Poder EVGA 80 PLUS GOLD",
    "Fuente de poder CORSAIR 80 PLUS GOLD",
    "Fuente de poder AEROCOOL KCAS 80 PLUS GOLD",
    "Fuente de poder SEASONIC 80 PLUS GOLD",
    "Fuente de poder AEROCOOL X 80 PLUS GOLD",
    "Fuente de poder COOLER MASTER 80 PLUS GOLD"];

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
          alert("Se agrego el producto " + this.nombre + " al carrito");
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
