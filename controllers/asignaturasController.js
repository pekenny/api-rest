const db = require("../db/dbConextion");

exports.getAsignaturas = (req, res) => {
  const sql = "SELECT * FROM asignaturas";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener asignaturas:", err);
      res.status(500).json({ error: "Error al obtener asignaturas" });
    } else {
      res.json(results);
    }
  });
};

exports.getAsignaturasCarrera = (req, res) => {
  const sql = `SELECT
                p.*,
                pa.*,
                a.nombre as nombreAsignatura, a.cantidaddehoras as cantHoras,
                pc.*,
                c.nombre as nombreCarrera, c.descripcion as descripcionCarrera
                FROM
                profesores p
                inner JOIN profesores_asignaturas pa on p.id = pa.id_profesor
                inner JOIN asignaturas a on pa.id_asignatura = a.id
                INNER JOIN profesores_carreras pc on p.id = pc.id_profesor
                INNER JOIN carreras c on pc.id_carrera = c.id`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener asignaturas:", err);
      res.status(500).json({ error: "Error al obtener asignaturas" });
    } else {
      res.json(results);
    }
  })
};
