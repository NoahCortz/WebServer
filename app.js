import express from "express";

const app = express();
const port = 3000;

// Construyendo rutas absolutas
const { pathname } = new URL('.', import.meta.url);
const __dirname = pathname.substring(1); // no usar en UNIX

// Configuraciones para servir contenido estatico
app.use( express.static('public') );

// Mis rutas

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
    console.log(`Corriendo en el puerto http://localhost:${ port }`);
});
