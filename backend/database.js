import express from 'express';
import { createConnection } from 'mysql';
const app = express();

//configuracion de la base de datos MySQL
const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'impresoras_sharp'
});

//ruta establecida para recuperar los datos de la base de datos
app.get('/printer', req, res =>{
    connection.query("SELECT * FROM printer", (err, rows, fields) =>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    });
} );

//Inicia el server en el puerto 3001
app.listen(3001, () =>{
    console.log('Server running on port 3001');
});

console.log('Hello world')