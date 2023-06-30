import { Request, Response } from "express";

class IndexController {
     public index(req: Request,res: Response){  
          res.json({text: 'Puedes acceder a /app/productos y todo lo demas'});
    }
}

export const indexController = new IndexController();