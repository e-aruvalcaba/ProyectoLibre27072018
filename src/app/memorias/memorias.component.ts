import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memorias',
  templateUrl: './memorias.component.html',
  styleUrls: ['./memorias.component.css']
})
export class MemoriasComponent implements OnInit {

  //--------------- inicia progra

  object = {
    id: 1,
    funcion: this.funcion()
  };

  funcion() {
    console.log("sdasda");
  }

  arrayImagenes: string[] = ['https://incared.net/wp-content/uploads/2015/04/Memoria-RAM-DDR4.jpg',
  'https://http2.mlstatic.com/memoria-ram-ddr4-16gb-D_NQ_NP_982901-MLM20441664272_102015-F.jpg',
  'https://thumb.pccomponentes.com/w-220-220/articles/11/114077/1140771.jpg',
  'https://cdn.blogdechollos.com/600x0/blogdechollos/2016/02/Modulos-de-memoria-RAM-Crucial-Ballistix-Elite-DDR4-16GB-baratos-ofertas-en-modulos-de-memoria-RAM-modulos-de-memoria-RAM-baratos-chollo.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCBqi6haJjRgkqNk0gxljjJ9-FEWgDtBuXHSPfOdtFfK7ET9tPDw',
  'https://http2.mlstatic.com/memoria-ram-ddr4-16gb-3200mhz-adata-spectrix-d40-rgb-2-x-8gb-D_NQ_NP_700642-MLA26376405812_112017-F.jpg'];

  arrayNombres: string[] = ["Memoria RAM DDR4 CORSAIR VENGEANCE 4GB",
    "KIT de memorias ram DDR4 KINGSTON HYPER X FURY 8GBX2 kit de 16gb",
    "Memoria ram DDR4 G SKILL TRIDENT Z RGB 16GB 8X2",
    "Memoria ram DDR4 CRUCIAL BALLISTIC 16GB 8X2",
    "Memoria ram DDR4 CORSAIR VALUE SET 8GB",
    "Memoria ram DDR4 A DATA XPG RGB 32GB 16X2"];

  arrayPrecios: string[] = ["1400",
    "2500",
    "5700",
    "4560",
    "2500",
    "8000"];

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
