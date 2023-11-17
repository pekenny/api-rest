const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

const profesorController = require('./controllers/profesorController');
const carrerasController = require('./controllers/carrerasController');
const asistenciasController = require('./controllers/asistenciasController');
const asignaturaController = require('./controllers/asignaturasController');

// Middleware para parsear JSON
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']}));

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API RESTful!');
});

//Rutas Profesores
app.get('/api/profesores', profesorController.getProfesor);

app.post('/api/profesores', profesorController.crearProfesor);

app.delete('/api/profesores/:id', profesorController.deleteProfesor);

app.put('/api/profesores/:id', profesorController.updateProfesor);

//Rutas Asistencias
app.get('/api/asistencias',asistenciasController.getAsistencias);
app.get('/api/asistencias/:id',asistenciasController.getAsistenciasId);
app.post('/api/asistencias',asistenciasController.crearAsistencia);

//Rutas Asignaturas
app.get('/api/asignaturas', asignaturaController.getAsignaturas);
app.get('/api/asignaturasCarrera', asignaturaController.getAsignaturasCarrera);

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
