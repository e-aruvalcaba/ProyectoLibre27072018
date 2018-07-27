import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procesadores-intel',
  templateUrl: './procesadores-intel.component.html',
  styleUrls: ['./procesadores-intel.component.css']
})
export class ProcesadoresIntelComponent implements OnInit {

  //--------------- inicia progra

  object = {
    id: 1,
    funcion: this.funcion()
  };

  funcion() {
    console.log("sdasda");
  }

  arrayImagenes: string[] = ['data:image/jpeg;base64,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',
    'https://images-eu.ssl-images-amazon.com/images/I/515kqMHI1IL.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofJcOAc7A5Y43AijZktD8Yew95pAAg_eL_ZwAVWUTnBC3c3TD',
    'https://images-na.ssl-images-amazon.com/images/I/81mX7y4qTjL._SL1500_.jpg'];

  arrayNombres: string[] = ["Procesador INTEL CORE I7 8700K 6 CORES 12 THREADS COFFEE LAKE 8va Gen",
    "Procesador INTEL CORE I5 8400 6 CORES 6 THREADS COFFEE LAKE 8va Gen",
    "Procesador INTEL CORE I3 8100 4 CORES 4 THREADS COFFEE LAKE 8va Gen",
    "Procesador Pentium g4600 7ma gen 1151"];

  arrayPrecios: string[] = ["6000",
    "4000",
    "2500",
    "1300"];

  inicializar() {
    for (var i = 0; i < 4; i++) {

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
