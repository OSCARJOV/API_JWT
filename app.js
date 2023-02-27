require("dotenv").config()
const express = require("express") // nos ayuda a levantar un servicio web
const cors = require("cors") // 
const dbConnectNoSql = require("./config/mongo")
const { dbConnectMySql } = require("./config/mysql")

const app = express()

const ENGINE_DB = process.env.ENGINE_DB;  //
const NODE_ENV = process.env.NODE_ENV || 'development';  // para dejarlo en modo desarrollo para jest

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

if(NODE_ENV !== 'test'){   // con esto se evita el erro de puerto en uso, ya que lo esta usando el supertest
app.listen(port, () => {
    console.log(`Tu app esta lista por http://:${port}`);
});  
}

//dbConnect();

(ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMySql();

//El modelo lleva la estructura de la tabla 

//SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";  // para que acepte time en Mysql
//SET time_zone = "+00:00";

//npm test
// instalar cross-env 

module.exports = app; // para fines de test jest