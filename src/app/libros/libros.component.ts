import { Component, OnInit } from '@angular/core';
import { Libro } from '../types/Libro';
import { LibrosService } from './libros.service';

@Component({
  //recordar añadir el selector en el template raiz
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})


//Hooks
//OnInit = nhOnInit => al montar el componente

export class LibrosComponent implements OnInit{
  constructor( private librosService: LibrosService ) {}

  libros: Libro[] = []; 

 /* inputContent: string = "" */

  esVisible: boolean = true

  ngOnInit(): void {
    this.libros = this.librosService.getLibros()
  }

  mostrarLibros() {
    this.esVisible = !this.esVisible
  }

  //toma del event emitter del hijo
  /* agregarAlCarro(libro: Libro) {
    console.log(libro)
  } */

}
