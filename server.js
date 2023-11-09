const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const profesorController = require('./controllers/profesorCotroller');

// Middleware para parsear JSON
app.use(express.json());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']}));

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API RESTful!');
});

app.get('/api/usuarios', profesorController.getUsuarios);

app.post('/api/usuarios', profesorController.crearUsuario);

app.delete('/api/usuarios/:id', profesorController.deleteProfesor);

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
