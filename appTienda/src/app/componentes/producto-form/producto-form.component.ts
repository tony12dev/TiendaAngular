import { Component, HostBinding, OnInit } from '@angular/core';

import { Producto } from 'src/app/modelos/prodcuto';
import { ProductoService } from 'src/app/servicios/producto.service'; 

import { Router } from '@angular/router'; //pra enviar a ruta en espesifico
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
    
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

     constructor(private productoService: ProductoService, private router: Router) {
     
    }
    
      ngOnInit(): void {
        
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

