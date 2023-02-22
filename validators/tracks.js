const {check} = require("express-validator");
const validateResult = require("../utils/handleValidators");


const validatorCreateItem = [
    check("name").exists().notEmpty().isLength({min:5, max:90}),

    check("album").exists().notEmpty().isLength({min:5, max:90}),

    check("cover").exists().notEmpty(),

    check("artist").exists().notEmpty(),

    check("artist.name").exists().notEmpty(),

    check("duration").exists().notEmpty(),

    check("duration.start").exists().notEmpty(),

    check("mediaId").exists().notEmpty().isMongoId(),

    (req, res, next) => {
        return validateResult(req, res, next)
    }


];


const validatorGetItem = [
    

    check("id").exists().notEmpty().isMongoId(),

    (req, res, next) => {
        return validateResult(req, res, next)
    }


];



module.exports = {validatorCreateItem, validatorGetItem};