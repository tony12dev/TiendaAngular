import { Component, HostBinding, OnInit } from '@angular/core';
//importar al archivo de producto.service
import { ProductoService } from 'src/app/servicios/producto.service';
@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  //creamos un arreglo para productos
  @HostBinding( 'class') classes = 'row';

  productos: any = [];
  constructor(private productoService: ProductoService){  }

  ngOnInit(): void{
    this.ObtenerProductos();
 }

  ObtenerProductos(): void{
     this.productoService.getProductos().subscribe(
      res => {
        //se llena el arreglo con la espuesta que enviamos
        this.productos = res;        
      },
      err => console.error(err)
     )
  };
  
   borrarProducto(codigo: string) {
    this.productoService.deleteProducto(codigo).subscribe(
     res => {
       //se llena el arreglo con la respuesta que enviamos 
       console.log(res);
       this.ObtenerProductos();
     },
     
     err => console.log(err)        
    )
    
    
  }


}
