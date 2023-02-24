import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegistrarForm } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  estaAutenticado: boolean = false
  estaProcesando: boolean = false
  contrasenasCoinciden: boolean = true

  login (form: LoginForm ) {
    if (this.estaProcesando) return
    this.estaProcesando = true
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.contrasena)
      .then((userCredential) => {
        this.estaAutenticado = true
        this.router.navigate([""])   
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.estaAutenticado = false
      })
      .finally( () => (this.estaProcesando = false) )
  }

  registrar (form: RegistrarForm) {
    if (this.estaProcesando) return
    this.estaProcesando = true
    if(form.contrasena !== form.contrasena2) {
      this.contrasenasCoinciden = false
      return
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.contrasena)
      .then((userCredential) => {
        //cambia esto
        this.estaAutenticado = true      
      })
      .catch((error) => {
        this.estaAutenticado = false
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally( () => (this.estaProcesando = false) )
  }

  cerrarSesion () {
    const auth = getAuth();
    signOut(auth)
    .then(() => {
      this.router.navigate(["login"])
      this.estaAutenticado = false
    })
    .catch((error) => {
      console.log(error)
    });
  }

  
}
