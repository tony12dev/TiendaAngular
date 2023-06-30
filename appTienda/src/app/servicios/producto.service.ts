import { Injectable } from '@angular/core';
// llamar al modulo angular http 
import {HttpClient} from '@angular/common/http';
import { Producto } from '../modelos/prodcuto'; //importamos la interfaz
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  // hacer una instacia para poder ocupar la propiedad http
 
   
  constructor(private http: HttpClient) { }
    getProductos(){
      return this.http.get(`${this.API_URI}/productos`);
    }
   
   getProducto(codigo: string){
      return this.http.get(`${this.API_URI}/productos/${codigo}`)
   
    }
    createProducto(prodcuto: Producto){

      return this.http.post(`${this.API_URI}/productos`,prodcuto);
    }
  
    deleteProducto(codigo: string){
      
      return this.http.delete(`${this.API_URI}/productos/${codigo}`);
   }
  
   updateProducto(codigo: string, updateProducto: Producto): Observable<Producto>{
      
    return this.http.put(`${this.API_URI}/productos/${codigo}`,updateProducto);
  } 
}
