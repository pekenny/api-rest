const db = require("../db/dbConextion");
const multer = require("multer");
const upload = require("../lib/multer");

exports.getProfesor = (req, res) => {
  // Consulta SQL para obtener profesores
  const sql = `SELECT * FROM profesores`;

  // Ejecutar la consulta
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener profesores:", err);
      res.status(500).json({ error: "Error al obtener profesores" });
    } else {
      res.json(results);
    }
  });
};

exports.crearProfesor = (req, res) => {
  const nuevoUsuario = req.body;

  console.log(nuevoUsuario); 

  // Consulta SQL para insertar un nuevo usuario
  const sql = `INSERT INTO profesores (nombreyapellido, dni, domicilio, telefono, email, foto, cv, fechadeingreso, fechadebaja) 
              VALUES ('${nuevoUsuario.nombreyapellido}','${nuevoUsuario.dni}','${nuevoUsuario.domicilio}','${nuevoUsuario.telefono}','${nuevoUsuario.email}',
              '${nuevoUsuario.foto}','${nuevoUsuario.cv}','${nuevoUsuario.fechadeingreso}','${nuevoUsuario.fechadebaja}')`;
  // Ejecutar la consulta
  db.query(
    sql,
    [
      nuevoUsuario.nombreyapellido,
      nuevoUsuario.dni,
      nuevoUsuario.domicilio,
      nuevoUsuario.telefono,
      nuevoUsuario.email,
      nuevoUsuario.fotos,
      nuevoUsuario.cv,
      nuevoUsuario.fechadeingreso,
      nuevoUsuario.fechadebaja,
    ],
    (err, results) => {
      if (err) {
        console.error("Error al crear un nuevo usuario:", err);
        res.status(500).json({ error: "Error al crear un nuevo usuario" });
      } else {
        nuevoUsuario.id = results.insertId;
        res.json(nuevoUsuario);
      }
    }
  );
};

exports.deleteProfesor = (req, res) => {
  const { id } = req.params;

  // consulta SQL para eliminar el usuario
  const sql = "DELETE FROM `profesores` WHERE id = ?";

  // ejecutar la consulta
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Error al eliminar el usuario:", err);
      res.status(500).json({ error: "Error al eliminar el usuario" });
    } else {
      res.json(results);
    }
  });
};

// update profesores
exports.updateProfesor = (req, res) => {
  const { id } = req.params;
  const data = req.body;

  console.log(data);
  // consulea SQL para actualizar registro
  const sql = `UPDATE profesores SET nombreyapellido = '${
    data.nombreyapellido
  }', dni = '${data.dni}', domicilio = '${data.domicilio}', telefono = '${
    data.telefono
  }', email = '${data.email}'	, foto = '${data.fotos}', cv = '${
    data.cv
  }', fechadeingreso = '${data.fechadeingreso}', fechadebaja = ${
    data.fechadebaja ? `'${data.fechadebaja}'` : "NULL"
  } WHERE id = ${id}`;

  // ejecutar la consulta
  db.query(sql, data, (err, results) => {
    if (err) {
      console.error("Error al actualizar el registro:", err);
      res.status(500).json({ error: "Error al actualizar el registro" });
    } else {
      res.json(results);
    }
  });
};
