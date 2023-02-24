import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  constructor() { }

  getLibros () {
    return [
      {
        nombre: "Libro sobre ovnis",
        autor: "un loco",
        src: "https://http2.mlstatic.com/D_NQ_NP_816839-MLU49185350458_022022-O.webp",
        precio: 350,
      },
      {
        nombre: "libro pastos para corte y pastoreo",
        autor: "Jose Bernal",
        src: "https://infopastosyforrajes.com/wp-content/uploads/2019/10/Pastos-para-Corte-y-Pastoreo.jpg",
        precio: 420,
      }
    ] 
  }

}
