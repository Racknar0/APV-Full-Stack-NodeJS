import express from "express";
import conectarDB from "./config/db.js";

const app = express();

conectarDB();

app.use('/', (req , res) => { 
    res.send('Test')
})

app.listen(4000, () => {
    console.log('Servidor Funcionando en el Puerto 4000');
});