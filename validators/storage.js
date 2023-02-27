const {check} = require("express-validator");
const validateResult = require("../utils/handleValidators");


const validatorGetItem = [
    

    check("id").exists().notEmpty(), //.isMongoId()

    (req, res, next) => {
        return validateResult(req, res, next)
    }


];



module.exports = {validatorGetItem};