const jwt = require("jsonwebtoken");
const getProperties = require("./handlePropertiesEngine");
const JWT_SECRET = process.env.JWT_SECRET;
const propertiesKey = getProperties()  // lo renombro con propertiesKey para que se ejecute una sola vez


                                    // user es el objeto del usuario, aqui pongo el nombre que yo quiera pero en la funcion donde lo exporto le paso el argumento    
const tokenSing = async(user) => {  // se pasan dos argumentos 1- payload
const sign = jwt.sign(        //2-el secret
                                    //3- opcional tiempo de expircion expiresIn
    {
        [propertiesKey.id]: user[propertiesKey.id],   //        _id: user._id,
        role:user.role
    },
    JWT_SECRET,
    {
        expiresIn: "2h",
    }
);
    return sign
}

const verifyToken = async (tokenJwt) => {  // tokenJWT es el token de sesion
    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        return null
    }
}

module.exports = {tokenSing, verifyToken }