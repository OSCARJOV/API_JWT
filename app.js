require("dotenv").config()
const express = require("express") // nos ayuda a levantar un servicio web
const cors = require("cors") // 
const dbConnect = require("./config/mongo")
const app = express()
const router = express.Router();

app.use(cors())  // use la libreria cors que evita el origen cruzado entre los navegadores
app.use(express.json()) // se incluye para poder crear con post
app.use(express.static("storage")) // permite hacer publicos los archivos guardados

//const PATH_ROUTES = __dirname

//console.log(PATH_ROUTES);

const port = process.env.PORT || 3000 // me trae la variable del .env o deja el 3000  // EL ARCHIVO .ENV NO SE SUBE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

//            app.get("/api/tracks", (req, res) => {   //  ESTRUCTURA PRINCIPAL
//                
//                const data = ["hol muindo2"]
//                res.send({data:data})
//            })
app.use("/api", require("./routes/index"))

app.listen(port, () => {
    console.log(`Tu app esta lista por http://:${port}`);
})  

dbConnect();

//El modelo lleva la estructura de la tabla 