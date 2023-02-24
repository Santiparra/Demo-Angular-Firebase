import { Component } from '@angular/core';
import { RegistrarForm } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  constructor(private authService: AuthService) {}

  form: RegistrarForm = {
    email: "",
    contrasena: "",
    contrasena2: "",
  }
 
  submit( ) {
    this.authService.registrar(this.form)
  }

  estaProcesando() {
    return this.authService.estaProcesando
  }

}
