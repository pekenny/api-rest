const db = require('../db/dbConextion');

exports.getUsuarios = (req, res) => {
  // Consulta SQL para obtener usuarios
  const sql = 'SELECT * FROM profesores';

  // Ejecutar la consulta
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener profesores:', err);
      res.status(500).json({ error: 'Error al obtener profesores' });
    } else {
      res.json(results);
    }
  });
};

exports.crearUsuario = (req, res) => {
  const nuevoUsuario = req.body;

  // Consulta SQL para insertar un nuevo usuario
  const sql = 'INSERT INTO usuarios (nombre) VALUES (?)';

  // Ejecutar la consulta
  db.query(sql, [nuevoUsuario.nombre], (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo usuario:', err);
      res.status(500).json({ error: 'Error al crear un nuevo usuario' });
    } else {
      nuevoUsuario.id = results.insertId;
      res.json(nuevoUsuario);
    }
  });
};

exports.deleteProfesor = (req, res) => {
  const { id } = req.params;
  
  // consulta SQL para eliminar el usuario
  const sql = 'DELETE FROM profesores WHERE id = ?';

  // ejecutar la consulta
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error al eliminar el usuario:', err);
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    } else {
      res.json(results);
    }
  });
};
