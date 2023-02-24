import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CarritoService } from 'src/app/carrito/carrito.service';
import { Libro } from '../../types/Libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit, OnDestroy{
  constructor(private carritoService: CarritoService) {}

  //enviar datos de padre a hijo
   @Input() libro: Libro = {} as Libro 
   estaEnCarro: boolean = false
  //enviar datos de hijo a padre
 /*  @Output() emitLibro = new EventEmitter<Libro>() */

  elIntervalo: any = null

  agregarAlCarro() {
    this.estaEnCarro = true
    this.carritoService.agregar(this.libro)
    /* this.emitLibro.emit(this.libro) */
  }

  quitarDelCarro() {
    this.estaEnCarro = false
    this.carritoService.quitar(this.libro)
  }

  ngOnInit():void {/* 
    this.elIntervalo =  setInterval(()=> {
      console.log("holap")
    },1000) */
  }

  ngOnDestroy():void {/* 
    clearInterval(this.elIntervalo)
    console.log({onDestroy: "al desmontar"}) */
  }

}
