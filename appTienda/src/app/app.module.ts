import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { ProductoFormComponent } from './componentes/producto-form/producto-form.component';
import { ProductoListComponent } from './componentes/producto-list/producto-list.component';
import { ProductoActualizarComponent } from './componentes/producto-actualizar/producto-actualizar.component';
import { ClienteFormComponent } from './componentes/cliente/cliente-form/cliente-form.component';
import { ClienteListComponent } from './componentes/cliente/cliente-list/cliente-list.component';
import { HttpClientModule } from '@angular/common/http'; //importamos el modulo de hhtp
import { ProductoService } from './servicios/producto.service';

//importamos el modulo de formModulo que va enlazar los input
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductoFormComponent,
    ProductoListComponent,
    ProductoActualizarComponent,
    ClienteFormComponent,
    ClienteListComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
