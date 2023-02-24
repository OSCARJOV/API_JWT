const { userModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");


const authMiddleware = async (req, res, next) => {
    try {
        
        if(!req.headers.authorization) {     //Valida si existe el envabezado autorization donde esta el token
            handleHttpError(res, "NOT_TOKEN" , 401);
            return
        }

        const token = req.headers.authorization.split(' ').pop(); // quita el toquen de la palabra beader."tokenfadfadf"
        const dataToken = await verifyToken(token);    //si pasa verifyToken es porque ya esta firmado                 // debo saber la carga util-payloand del token para saber el id y saber si tiene permisos

        if(!dataToken._id) {                                // aqui me aseguro que existe un id
            handleHttpError(res, "ERROR_ID_TOKEN", 401);
            return
        }
           
           const user = await userModel.findById(dataToken._id) // para saber que usuario esta logueado
            req.user = user

            next() 

    } catch (error) {
        handleHttpError(res, "NOT_SESSION", 401);
    }
}

module.exports = authMiddleware;