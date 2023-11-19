const multer = require("multer");

// Configura el almacenamiento de multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Crea una instancia de multer y especifica el almacenamiento
const upload = multer({ storage: storage });

module.exports = upload;
