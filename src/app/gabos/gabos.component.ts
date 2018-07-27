import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gabos',
  templateUrl: './gabos.component.html',
  styleUrls: ['./gabos.component.css']
})
export class GabosComponent implements OnInit {

  object = {
    id: 1,
    funcion: this.funcion()
  };

  funcion(){
    console.log("sdasda");
  }

  arrayImagenes: string[] = ['https://http2.mlstatic.com/gabinete-gamer-rgb-eagle-warrior-mirror-plus-cgw5mirrorplseg-D_NQ_NP_630213-MLM27055886655_032018-F.jpg',
                            'https://http2.mlstatic.com/gabinete-pc-raidmax-alpha-a15-black-rgb-gamer-1x-cooler-D_NQ_NP_935283-MLA25578404371_052017-F.jpg',
                            'https://www.terabyteshop.com.br/img/produtos/g/gabinete-gamer-gamemax-infinit-m908-rgb-black-mid-tower-sfonte_46513.png',
                            'https://http2.mlstatic.com/gabinete-gamer-thermaltake-versa-c21-rgb-mid-tower-mexx-D_NQ_NP_209015-MLA25207767470_122016-F.jpg',
                            'https://http2.mlstatic.com/gabinete-sentey-huracan-gs-6970-6-coolers-led-rgb-full-gamer-D_NQ_NP_881997-MLA26261600152_102017-F.jpg',
                            'https://http2.mlstatic.com/gabinete-corsair-crystal-570x-rgb-vidrio-templado-htg-gamers-D_NQ_NP_766161-MLA25764800854_072017-F.jpg'];

  arrayNombres: string[] = ["Gabinete gamer Eagle Warrior MIRROR PLUS",
    "Gabinete Gamer RAIDMAX APLHA RGB ",
    "Gabinete Gamer GameMax INFINITE RGB ",
    "Gabinete Gamer THERMALTHAKE VERSA N21 RGB",
    "Gabinete Gamer SENTEY HURACAN RGB",
    "Gabinete Gamer CORSAIR CRYSTAL 570x RGB"];

  arrayPrecios: string[] = ["999",
    "1350",
    "1500",
    "1800",
    "3500",
    "4728"];

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
      this['button' + i].nombre = this.arrayNombres[i];
      this['button' + i].textContent = "Agregar a Carrito";
      this['button' + i].onclick = function () {
        alert("Se agrego el producto "+ this.nombre  +"al carrito");
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



constructor() {

}

ngOnInit() {

}

}
