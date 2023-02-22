const express = require("express");
const router = express.Router();   //este es el manejador de las rutas
const fs = require("fs")


const PATH_ROUTES = __dirname // ruta absoluta c:/docum...
console.log(PATH_ROUTES);

const removeExtension = (solo) => { //aqui recibe el track.js o el storage.js
    console.log(removeExtension);
    return solo.split('.').shift()

}

fs.readdirSync(PATH_ROUTES).filter((file) => {   // lee directorio asincrona genera un array, que me filtre solo uno
        const name = removeExtension(file) // hasta aqui esta en trakcls o user.js por eso remueve el punto
        console.log(name);
        if(name !== 'index') {
           router.use(`/${name}`, require(`./${file}`)) //carga dinamica
          
        }
})




module.exports = router
 