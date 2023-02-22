const multer = require("multer") // paquete para cargar archivos


const storage = multer.diskStorage({
    
    destination: function (req, file, cb){  //Configuracion subir archivo
            const pathStorage = `${__dirname}/../storage`
            cb(null, pathStorage)
    },
    filename: function(req, file, cb){
        const ext = file.originalname.split(".").pop(); // toma el archivo, lo divide, devuelve un arreglo y con pop tome el ultimo nombre
        const filename = `file-${Date.now()}.${ext}`   //nombre del archivo guardado
        cb(null, filename);
    },
})
 
const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware