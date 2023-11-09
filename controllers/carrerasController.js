const db = require("../db/dbConextion");

// function para obtener carreras
exports.getCarreras = (req, res) => {
    // query
    const sql = "SELECT * FROM `carreras`";
    // Ejecutar la consulta
    db.query(sql, (err, results) => {
      if (err) {
        console.error("Error al obtener carreras:", err);
        res.status(500).json({ error: "Error al obtener carreras" });
      } else {
        res.json(results);
      }
    });
  };