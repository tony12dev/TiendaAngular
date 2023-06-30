import { Router } from "express";
import { indexController } from "../controllers/indexController";
class IndexRouters {

        public router: Router= Router();
        
           constructor(){
             this.config();
           }

           config() {
              this.router.get('/', indexController.index); //ruta inicial de index contrer 
           }

}

const indexRouters = new IndexRouters();
    export default indexRouters.router;