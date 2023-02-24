import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegistrarComponent } from "./auth/registrar/registrar.component";
import { CarritoComponent } from "./carrito/carrito.component";
import { LibrosComponent } from "./libros/libros.component";

const routes: Routes = [
    { path: "", component: LibrosComponent },
    { path: "carrito", component: CarritoComponent },
    { path: "login", component: LoginComponent },
    { path: "registrar", component: RegistrarComponent },

] 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {

}