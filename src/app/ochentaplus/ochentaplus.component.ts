import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ochentaplus',
  templateUrl: './ochentaplus.component.html',
  styleUrls: ['./ochentaplus.component.css']
})
export class OchentaplusComponent implements OnInit {

  //--------------- inicia progra

  object = {
    id: 1,
    funcion: this.funcion()
  };

  funcion(){
    console.log("sdasda");
  }

  arrayImagenes: string[] = ['https://myhobbies.com.co/wp-content/uploads/2017/10/fuente-de-poder-evga-500w-80-plus-white-100-w1-0500-kr.jpg',
    'data:image/jpeg;base64,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',
    'https://http2.mlstatic.com/fuente-de-poder-corsair-cx430-430w-80-plus-bronze-D_NQ_NP_756117-MLM26219370119_102017-F.jpg',
    'https://www.cyberpuerta.mx/img/product/M/CP-GAMEFACTOR-PSG650-1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0eo9qK-3nsseGO-KHh-7Cw2jW48XXvZcqI51zw9oXT75Cjxyhdg',
    'http://dynamia.uy/store/7960-large_default/fuente-de-poder-coolermaster-b600-600w-80-plus.jpg'];

  arrayNombres: string[] = ["Fuente de Poder EVGA 80 PLUS",
    "Fuente de poder GIGABYTE 80 PLUS",
    "Fuente de poder CORSAIR 80 PLUS ",
    "Fuente de poder GAME FACTOR 80 PLUS",
    "Fuente de poder EAGLE WARRIOR 80 PLUS",
    "Fuente de poder ECO PSU 80 PLUS"];

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
