const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

const profesorController = require('./controllers/profesorController');
const carrerasController = require('./controllers/carrerasController');
const asistenciasController = require('./controllers/asistenciasController');
const asignaturaController = require('./controllers/asignaturasController');
const usuariosController = require('./controllers/usuariosController');

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

// Rutas Usuarios
app.get('/api/usuarios', usuariosController.getUsuarios);

app.post('/api/usuarios', usuariosController.crearUsuario);

app.delete('/api/usuarios/:id', usuariosController.deleteUsuario);

app.put('/api/usuarios/:id', usuariosController.updateUsuario);

//Rutas Asistencias
app.get('/api/asistencias',asistenciasController.getAsistencias);
app.get('/api/asistencias/:id',asistenciasController.getAsistenciasId);
app.post('/api/asistencias',asistenciasController.crearAsistencia);

//Rutas Asignaturas
app.get('/api/asignaturas', asignaturaController.getAsignaturas);
app.get('/api/asignaturasCarrera', asignaturaController.getAsignaturasCarrera);

// Rutas Uploads photo y cv
app.post('/api/uploadPhoto', profesorController.uploadsPhoto);
app.post('/api/uploadCv', profesorController.uploadCV);

// ruta uploads
app.use('/uploads', express.static('uploads'));

// rutas para permisos y/o roles
app.get('/api/roles', usuariosController.getRoles);

// Ruta Login
app.post('/api/login', usuariosController.getUserLogin);

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
