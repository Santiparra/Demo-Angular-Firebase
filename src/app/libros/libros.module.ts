import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosService } from './libros.service';
import { LibrosComponent } from './libros.component';
import { LibroComponent } from './libro/libro.component';



@NgModule({
  declarations: [LibrosComponent, LibroComponent],
  providers: [LibrosService],
  imports: [CommonModule],
  exports: [LibrosComponent]
})
export class LibrosModule { }
