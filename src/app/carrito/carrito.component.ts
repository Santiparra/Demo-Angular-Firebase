import { Component } from '@angular/core';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent {
  constructor(private carritoService: CarritoService) {}


  getCarrito( ) {
    return this.carritoService.get()
  }

  
}
