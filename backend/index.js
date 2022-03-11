import express from "express";
import dotenv from "dotenv"; //Dot ENV para leer variable de entorno
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js"

const app = express();
dotenv.config();

conectarDB(); //Funcion conectarDB


app.use('/api/veternarios' ,veterinarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor Funcionando en el Puerto ${PORT}`);
});