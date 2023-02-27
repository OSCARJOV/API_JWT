const { compare } = require("bcryptjs");
const { matchedData } = require("express-validator");
const { userModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { tokenSing } = require("../utils/handleJwt");
const { encrypt } = require("../utils/handlePassword");

    const registeruser = async(req, res) => {
  

     try {
        req = matchedData(req);
    const passwordHash = await encrypt(req.password)  // req.password es la contraseña sin encriptar
    const body = {...req, password:passwordHash} 
    const dataUser = await userModel.create(body)  // registra usuario en BD 
    
    dataUser.set("password", undefined, { strict: false });  // se setea para que permita omitor en la respuesta el password(queno se vea en el postman)

    const data = {
        token: await tokenSing(dataUser),
        user: dataUser
    }

    res.send({ data })
     } catch (error) {
        handleHttpError(res, "ERROR_REGISTER_USER", 401)
     }       
   

}


    const loginUser = async(req, res) => {
            try {
                req = matchedData(req);
                const user = await userModel.findOne({email: req.email})
            // Con mysql no funciona    .select('password name email role') // como se hizo seteo y en modeols se dejo password- select:false se adiciona .select('password')

                if(!user){
                    handleHttpError(res, "USER_NOT_EXIST", 404);
                    return
                }

                const hashPassword = user.get('password'); // si no lo hubiese seteado seria user.password
                console.log({hashPassword});

                const check = await compare(req.password, hashPassword)
              
                if(!check){
                    handleHttpError(res, "PASSWORD_INVALID", 401);
                    return
                }    

                user.set('password', undefined, {strict:false})
                const data = {
                    token: await tokenSing(user),
                    user
                }

                res.send({data})

            } catch (error) {
                handleHttpError(res, "ERROR_LOGIN_USER")

            }
    }

    module.exports = {registeruser, loginUser}