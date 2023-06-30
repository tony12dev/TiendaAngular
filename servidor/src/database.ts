import mysql from 'promise-mysql'

import data from './data';



const pool = mysql.createPool(data.dataBase);


pool.getConnection()
.then((connection: any)=>{
    pool.releaseConnection(connection )
    console.log('Conexion exitosa');
});





export default pool;