import { Router } from "express";
import productoController from "../controllers/productoController";
class ProductoRouters {

        public router: Router= Router();
        
           constructor(){
             this.config();
           }

           config() {
              this.router.get('/',productoController.lista);
              this.router.post('/',productoController.crearProducto);
              this.router.put('/');
              this.router.put('/:codigo', productoController.actualizar);
              this.router.delete('/:codigo', productoController.borrar);
              this.router.get('/:codigo', productoController.buscar);
           }

}

const prodcutoRouters = new ProductoRouters();
    export default prodcutoRouters.router;