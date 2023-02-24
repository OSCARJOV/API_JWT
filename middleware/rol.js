const { handleHttpError } = require("../utils/handleError");


const checkRol = (rol) =>(req, res, next) => {

    try {
        const { user } = req;
        next();    
    } catch (error) {
        handleHttpError(req, "ERROR_PERMISSIONS", 403)
    }
    

};


module.exports = checkRol;