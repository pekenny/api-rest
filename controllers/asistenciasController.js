const db = require("../db/dbConextion");

exports.crearAsistencia = (req, res) => {
  const nuevaAsistencia = req.body;

  const { profesor, fecha, estado } = nuevaAsistencia;

  const sql = `INSERT INTO asistencias (profesor_id, fecha, estado) VALUES ('${profesor}','${fecha}', '${estado}')`;

  db.query(
    sql,
    [
      nuevaAsistencia.idProfesor,
      nuevaAsistencia.idCarrera,
      nuevaAsistencia.fecha,
    ],
    (err, results) => {
      if (err) {
        console.error("Error al crear una nueva asistencia:", err);
        res.status(500).json({ error: "Error al crear una nueva asistencia" });
      } else {
        res.json(nuevaAsistencia);
      }
    }
  );
};

// get asistencias
exports.getAsistencias = (req, res) => {
  // Consulta SQL para obtener todas las asistencias
  const sql = `select a.*,p.* from asistencias a inner join profesores p on a.profesor_id = p.id`;

  // Ejecutar la consulta
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener las asistencias:", err);
      res.status(500).json({ error: "Error al obtener las asistencias" });
    } else {
      res.json(results);
    }
  });
};

// get asistencias por id
exports.getAsistenciasId = (req, res) => {
  const { id } = req.params;

  // Consulta SQL para obtener las asistencias por id
  const sql = `SELECT * FROM asistencias WHERE id = ${id}`;

  // Ejecutar la consulta
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener las asistencias por id:", err);
      res
        .status(500)
        .json({ error: "Error al obtener las asistencias por id" });
    } else {
      res.json(results);
    }
  });
};
