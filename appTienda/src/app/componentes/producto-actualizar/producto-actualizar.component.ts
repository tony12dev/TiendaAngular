import { Component, HostBinding, OnInit } from '@angular/core';

import { Producto } from 'src/app/modelos/prodcuto';
import { ProductoService } from 'src/app/servicios/producto.service'; 
import {ActivatedRoute, Router } from '@angular/router'; //pra enviar a ruta en espesifico
import { parseHostBindings } from '@angular/compiler';



@Component({
  selector: 'app-producto-actualizar',
  templateUrl: './producto-actualizar.component.html',
  styleUrls: ['./producto-actualizar.component.css']
})
export class ProductoActualizarComponent implements OnInit {

  @HostBinding('class' ) clases = 'row';

  producto: Producto = {
    codigo: 0,
    nombre: '',
    precio: {},
    cantidad: 0,
    descripcion: '',
    imagen: '',
    fecha: new Date()

  };

  edit: boolean = false; 

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute) {
     
  }
  
    ngOnInit(): void {
       const params = this.activatedRoute.snapshot.params;
       if(params ['codigo']) {
         this.productoService.getProducto(params['codigo']).subscribe(
          res => {
            //muestra en la consola  
            console.log(res);
            this.producto = res; //muestra en  el navegador
            this.edit = true; // asignamos que es verdadero
         },
         err => console.error(err)
         );
       }
    }

    updateProducto(){

      delete this.producto.fecha;
      //console.log(this.producto); lo manda en consola 

      const params = this.activatedRoute.snapshot.params;
      this.productoService.updateProducto(params['codigo'],this.producto).subscribe(
        res => {
          //llenamos el arreglo con la respuesta 
          console.log(res);
          this.router.navigate(['/productos'])
       },
       err => console.error(err)
      );
     
    }


    addProducto() {
     
      delete this.producto.codigo;
      delete this.producto.fecha;
      //console.log(this.producto); lo manda en consola 
      this.productoService.createProducto(this.producto).subscribe(
        res => {
           //llenamos el arreglo con la respuesta 
           console.log(res);
           this.router.navigate(['productos'])
        },
        err => console.error(err)
      );
    }


}

