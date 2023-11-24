const db = require("../db/dbConextion");

exports.getRoles = (req, res) => {
  // Consulta SQL para obtener roles
  const sql = `SELECT * FROM permisos`;

  // Ejecutar la consulta
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener roles:", err);
      res.status(500).json({ error: "Error al obtener roles" });
    } else {
      res.json(results);
    }
  });
};

exports.getUsuarios = (req, res) => {
  // Consulta SQL para obtener usuarios
  const sql = `select u.*,p.nombre as nombrePermiso from usuarios u inner join permisos p on u.id_permisos = p.id`;

  // Ejecutar la consulta
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener usuarios:", err);
      res.status(500).json({ error: "Error al obtener usuarios" });
    } else {
      res.json(results);
    }
  });
};

exports.getUserLogin = (req, res) => {
  const { username, password } = req.body;

  console.log(`datos : {nombre: ${username}, password: ${password}}`);
  // Consulta SQL para obtener usuario
  const sql = `SELECT * FROM usuarios WHERE nombre = "${username}" AND password = "${password}"`;

  // Ejecutar la consulta
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener usuario:", err);
      res.status(500).json({ error: "Error al obtener usuario" });
    } else {
      if(results.length !== 0){
        res.json({user: results, message: true});
      }else{
        res.status(500).json({ error: "Error al obtener usuario" });
      }
      
    }
  })
}

exports.crearUsuario = (req, res) => {
  const { usuario, correo, contrasena, rol } = req.body;
  console.log(req.body);
  // Consulta SQL para insertar usuario
  const sql = `INSERT INTO usuarios (nombre, correo, password, id_permisos) VALUES ("${usuario}", "${correo}", "${contrasena}", ${rol})`;

  // Ejecutar la consulta
  db.query(sql, [usuario, correo, contrasena, rol], (err, results) => {
    if (err) {
      console.error("Error al crear usuario:", err);
      res.status(500).json({ error: "Error al crear usuario" });
    } else {
      res.json(results);
    }
  });
};

exports.deleteUsuario = (req, res) => {
  const { id } = req.params;

  // Consulta SQL para eliminar usuario
  const sql = `DELETE FROM usuarios WHERE id = ${id}`;

  // Ejecutar la consulta
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Error al eliminar usuario:", err);
      res.status(500).json({ error: "Error al eliminar usuario" });
    } else {
      res.json(results);
    }
  });
};

exports.updateUsuario = (req, res) => {
  const { id } = req.params;
  const { usuario, correo, contrasena, rol } = req.body;

  // Consulta SQL para actualizar usuario
  const sql = `UPDATE usuarios SET nombre = '${usuario}', correo = '${correo}', password = '${contrasena}', rol = ${rol} WHERE id = ${id}`;

  // Ejecutar la consulta
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al actualizar usuario:", err);
      res.status(500).json({ error: "Error al actualizar usuario" });
    } else {
      res.json(results);
    }
  });
};
