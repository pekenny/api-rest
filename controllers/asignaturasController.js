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