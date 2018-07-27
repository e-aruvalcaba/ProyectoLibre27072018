import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motherboard',
  templateUrl: './motherboard.component.html',
  styleUrls: ['./motherboard.component.css']
})
export class MotherboardComponent implements OnInit {

 //--------------- inicia progra

 object = {
  id: 1,
  funcion: this.funcion()
};

funcion() {
  console.log("sdasda");
}

arrayImagenes: string[] = ['http://cdn7.bigcommerce.com/s-tzve392mt3/images/stencil/2048x2048/products/149/776/Z270-Gaming_3__90342.1496801798.png?c=2',
'https://http2.mlstatic.com/motherboard-asus-rog-strix-h270f-gaming-1151-intel-h270-hdmi-D_NQ_NP_759480-MLA25809859631_072017-F.jpg',
'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6109/6109529_sd.jpg;maxHeight=640;maxWidth=550',
'data:image/jpeg;base64,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',
'https://images.anandtech.com/doci/10044/gigabyte_990_fx_gaming_2_678x452.png',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkDk2Y30ybIoiKKLs2F010VgWVAG4SlDUTA0OEkhtt1jj5RQDK'];

arrayNombres: string[] = ["Motherboard Gigabyte ZW70 GAMING 3 INTEL 1151",
  "Motherboard ASUS STRIX H270-F GAMING INTEL 1151",
  "Motherboard MSI Z270 GAMING M5 INTEL 1151",
  "Motherboard MSI X370 PRO CARBON AM4 RYZEN",
  "Motherboard GIGABYTE 990FX GAMING AM3+ PARA PROCESADORES AMD FX ",
  "Motherboard GIGABYTE AORUS AX370 GAMING K5 AM4 RYZEN"];

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
