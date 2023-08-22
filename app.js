import express from "express";
import hbs from "hbs";
import "dotenv/config";

const app = express();
const port = process.env.PORT; // variables de entorno (.ENV)

// Construyendo rutas absolutas
const { pathname } = new URL('.', import.meta.url);
const __dirname = pathname.substring(1); // no usar en UNIX


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Configuraciones para servir contenido estatico
app.use( express.static('public') );

// Mis rutas
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Road Trip',
        name: 'Noe Cortez'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'Road Trip',
        name: 'Noe Cortez'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        title: 'Road Trip',
        name: 'Noe Cortez'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
    console.log(`Corriendo en el puerto http://localhost:${ port }`);
});
