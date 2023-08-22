import express from "express";

const app = express();
const port = 3000;

// Utilizando arrow function () => {}
app.get('/', (req, res) => {
    res.send('Hello, world! 🌎');
});

// Creamos más rutas para acceder a un contenido específico
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo! Estamos desde otra ruta! 😎');
});

// Si alguien quiere acceder a una ruta que no esta definida antes
// que esta, le mostramos un mensaje personalizado
app.get('*', (req, res) => {
    res.send('Esta ruta no existe. ❌');
});

// Configuramos el puerto donde se estará exponiendo nuestro WebServer
// Configuramos un mensaje para que se muestre en consola sobre el puerto
app.listen(port, () => {
    console.log(`Corriendo en el puerto http://localhost:${ port }`);
});
