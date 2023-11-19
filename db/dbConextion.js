const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost', // Cambia esto por la dirección de tu servidor MariaDB
  user: 'root',
  password: 'evalu',
  database: 'abm_escuela',
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// exportar la base de datos
module.exports = db;

