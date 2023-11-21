const multer = require("multer");

// Configura el almacenamiento de multer
const storagePhoto = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    // permitir jpeg | jpg | png | pdf
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/png"
    ) {
      cb(null, file.originalname);
    } else {
      cb(null, false);
    }
    // cb(null, Date.now() + "-" + file.originalname);
  
  },
});

const storageCv = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
   if (
      file.mimetype == "application/pdf"
    ) {
      cb(null, file.originalname);
    } else {
      cb(null, false);
    }
    // cb(null, Date.now() + "-" + file.originalname);
  },
})

// Crea una instancia de multer y especifica el almacenamiento
const uploadPhoto = multer({ storage: storagePhoto });
const uploadCv = multer({ storage: storageCv });

module.exports = {uploadPhoto, uploadCv};
