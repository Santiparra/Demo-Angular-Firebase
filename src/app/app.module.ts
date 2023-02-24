import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LibrosModule } from "./libros/libros.module";
import { CarritoComponent } from './carrito/carrito.component';
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";


//Decorador de modulos
@NgModule({
    //Componentes del modulo
    declarations: [AppComponent, CarritoComponent],

    //aca formsmodule es para usar ngmodule
    imports: [
        BrowserModule, 
        FormsModule, 
        LibrosModule, 
        AppRoutingModule,
        AuthModule,
    ],

    
    //boostrapeo del componente raiz, solo va en el modulo raiz
    bootstrap: [AppComponent],
})

export class AppModule {}