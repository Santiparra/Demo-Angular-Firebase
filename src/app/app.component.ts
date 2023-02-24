import { Component, OnInit } from "@angular/core";
import { initializeApp } from "firebase/app";
import { AuthService } from "./auth/auth.service";
import { firebaseConfig } from "./firebase.config";

//decorador componente
@Component({
    //ancla renderizado (punto montaje)
    selector: "app-root",
    //template html para el componente, puede ser inline quitando Url
    templateUrl: "app.component.html",
    //template nivel componente, puede ser inline quitando Urls y style plural
    styleUrls: ["app.component.css"],
})

export class AppComponent implements OnInit{
    constructor (private authService: AuthService) {}

    ngOnInit(): void {
        initializeApp(firebaseConfig)
    }

    estaAutentificado () {
        return this.authService.estaAutenticado
    }

    cerrarSesion ( ) {
        this.authService.cerrarSesion()
    }

}