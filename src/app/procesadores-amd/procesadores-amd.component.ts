import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procesadores-amd',
  templateUrl: './procesadores-amd.component.html',
  styleUrls: ['./procesadores-amd.component.css']
})
export class ProcesadoresAmdComponent implements OnInit {

  //--------------- inicia progra

  object = {
    id: 1,
    funcion: this.funcion()
  };

  funcion() {
    console.log("sdasda");
  }

  arrayImagenes: string[] = ['https://www.cyberpuerta.mx/img/product/M/CP-AMD-YD130XBBAEBOX-1.jpg',
'data:image/jpeg;base64,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',
'https://http2.mlstatic.com/micro-procesador-amd-ryzen-7-1700x-8x-38ghz-am4-gamer-D_NQ_NP_782525-MLA25443896560_032017-F.jpg'];

  arrayNombres: string[] = ["Procesador AMD RYZEN 3 1200X AM4",
    "Procesador AMD RYZEN 5 1500 AM4",
    "Procesador AMD RYZEN 7 1700 AM4"];

  arrayPrecios: string[] = ["6000",
    "4000",
    "2500",
    "1300"];

  inicializar() {
    for (var i = 0; i < 3; i++) {

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
