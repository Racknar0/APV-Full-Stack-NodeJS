import express from "express";

const app = express();

app.use('/', (req , res) => {
    res.send('Test')
})

app.listen(4000, () => {
    console.log('Servidor Funcionando en el Puerto 4000');
});