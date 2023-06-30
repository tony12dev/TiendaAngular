import { Request, Response } from "express";

import pool from '../database';

class ProductoController {
     public async lista(req: Request,res: Response){  
         const producto =  await pool.query('select *from producto');
          res.json(producto);
    }

    public async crearProducto(req: Request,res: Response){ 
    // console.log(req.body); 
     await pool.query('insert into producto set?' , [req.body])
     res.json({message: 'Prodcuto Agregado por metodo POST'});
    }
    public async actualizar(req: Request, res: Response){
        const {codigo } = req.params;
        await pool.query('update producto set ? where codigo = ?',[req.body, codigo]);
        res.json({message: 'Datos actualizados'});
    }

    public async borrar(req: Request, res: Response){
        const {codigo } = req.params;
        await pool.query('delete from producto  where codigo = ?',[codigo]);
        res.json({message: 'Dato Eliminado'});
    }

    public async buscar(req: Request, res: Response){
        const {codigo} = req.params;
        const prodcuto = await pool.query('select *from producto where codigo = ?',[codigo]);
        if(prodcuto.length  > 0 ){
            return res.json(prodcuto[0]);
            res.json({mesaage: 'Dato encontrado'})

        }
        res.status(404).json({message: 'No existe ese prodcuto'});
      
    }

}



export const productoController = new ProductoController(); //devuelve un object
export default productoController; //importando la instancia 