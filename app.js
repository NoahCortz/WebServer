// Importamos express
import express from "express";

// Creamos una instancia para nuestro servidor
const app = express();

// Configuramos nuestra primera ruta '/' y respondemos con un mensaje
app.get('/', function(req, res) {
    res.send('Hello, world! 🌎');
});

// Configuramos el puerto donde se estará exponiendo nuestro WebServer
app.listen(8080);
