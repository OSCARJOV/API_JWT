
const {tracksModel} = require("../models")
const { handleHttpError } = require("../utils/handleError")
const { matchedData } = require("express-validator")


const getItems = async (req, res) => {  // async y await para esperar al servidor
    
try {
    const user = req.user;
    const data = await tracksModel.find({})
    res.send({data, user})
} catch (error) {
    handleHttpError(res,"ERROR_GET_ITEMS")
}



    // tracksModel.find({}).then((res) => {console.log(res)})  // SEGUNDA OPCION

    }

const getItem = async (req,res) => {
    try {
        req = matchedData(req)
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({data});
    } catch (error) {
        handleHttpError(res, "Error_Get_Items")
    }
};

const createItems = async (req,res) => {

    try {
        const body = matchedData(req) 
        const data = await tracksModel.create(body)
        res.send({data})
    } catch (error) {
        handleHttpError(res,"ERROR_POST_ITEMS")

    }

 
};
const updatetems =  async (req,res) => {

    
    try {
        const {id, ...body} = matchedData(req)  // extraigo el id, de aqui me salen dos objetos
        const data = await tracksModel.findOneAndUpdate(
            id, body
        )
        res.send({data})
    } catch (error) {
        handleHttpError(res,"ERROR_UPDATE_ITEMS")

    }

};
const deletetems = async (req,res) => {
    try {
        req = matchedData(req)
        const {id} = req;
        const data = await tracksModel.delete({_id:id});
        res.send({data});
    } catch (error) {
        handleHttpError(res, "Error_Delete_Items")
    }
};


module.exports = { getItem,getItems,createItems,updatetems,deletetems};
