import { Injectable } from '@angular/core';
import { Libro } from '../types/Libro';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
 carrito: Libro[] = []


  constructor() { }

  agregar(libro: Libro) {
    console.log(libro)
    this.carrito.push(libro)
  }

  quitar(libro: Libro) {
    this.carrito = this.carrito.filter((esto) => esto != libro)
  }

  get() {
    return this.carrito
  }



}
