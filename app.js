import express from "express";

const app = express();
const port = 3000;

// Construyendo rutas absolutas
const { pathname } = new URL('.', import.meta.url);
const __dirname = pathname.substring(1); // usar en UNIX

// Configuraciones para servir contenido estatico
app.use( express.static('public') );

// Mis rutas

// La ruta con el path '/' ya no es necesario declararla dado que estamos
// sirviendo el contenido estatico es lo primero que se renderizara.

// Hemos creado un directorio nuevo llamado 'hola-mundo' y dentro de él
// se ha declarado un 'index.html'. Con este cambio, la siguiente ruta
// ya no retornaría el mensaje sino que se está renderizando una página html.

// Se puede borrar esta ruta declarada pues ya se está renderizando una
// estructura en la carpeta public.
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo! Estamos desde otra ruta! 😎');
});

// Si deseamos mantener la declaración de la ruta pero que se renderice una
// página web, hacemos lo siguiente:
app.get('*', (req, res) => {
    res.sendFile(pathname + '/public/404.html');
});


app.listen(port, () => {
    console.log(`Corriendo en el puerto http://localhost:${ port }`);
});
