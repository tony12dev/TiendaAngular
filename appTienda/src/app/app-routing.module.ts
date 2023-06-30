import { NgModule } from "@angular/core";
//permite definir las rutas de la app 
import { Route, RouterModule, Routes } from "@angular/router";
// importamos el archivo de la ruta siguiente
import { ProductoListComponent } from './componentes/producto-list/producto-list.component';
//importamos la clase de prodcuto.form.componet
import { ProductoFormComponent } from './componentes/producto-form/producto-form.component';
import { combineLatest } from 'rxjs';
import { ProductoActualizarComponent } from './componentes/producto-actualizar/producto-actualizar.component';
const routes: Routes = [

  // creamos objectos 
  // muestra lo que esta en el archivo producto-list.component.html
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
 
  },
  {
    path: 'productos',
    component: ProductoListComponent // se creo la ruta para abrir un componente 
  },
  {
    path: 'productos/agregar',
    component: ProductoFormComponent // cre creo la ruta para abir al componente del formulario
  },
  {
  path: 'productos/actualizar/:codigo',//ruta para actualizar
   component: ProductoActualizarComponent
  }
]; 

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]

})
 
export class appRoutingModule {

}
