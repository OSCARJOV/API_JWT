const fs = require("fs")
const { matchedData } = require("express-validator")
const {storageModel} = require("../models")
const { handleHttpError } = require("../utils/handleError")
const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`  // ruta absoluta para usar el delete de archivo

const getItems = async (req, res) => {  // async y await para esperar al servidor
    try {
        const data = await storageModel.find({})
        res.send({data})
    
    } catch (error) {
        handleHttpError(res, "ERROR_GET_STORAGE")
    }
        
    // tracksModel.find({}).then((res) => {console.log(res)})  // SEGUNDA OPCION
    }

const getItem = async (req,res) => {
    try {
        const { id } = matchedData(req)
        const data = await storageModel.findById(id)
        res.send({data})
    
    } catch (error) {
        handleHttpError(res, "ERROR_GET_STORAGE")
    }
};

const createItems = async (req,res) => {
   try {
    const {file} = req
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    console.log(file);
    res.send({data})
   } catch (error) {
    handleHttpError(res, "ERROR_CREATE_STORAGE")

   }
   
    
};
//const updatetems = async (req,res) => {};

const deletetems = async (req,res) => {

    try {
        const { id } = matchedData(req)
        const dataFile = await storageModel.findById(id);
        await storageModel.delete({_id:id})
        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`
        
      //  fs.unlinkSync(filePath); // quito esta linea para eliminar con soft delete
        const data = {
            filePath,
            delete:1
        }

        res.send({ data })
    
    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_STORAGE")
    }

};


module.exports = { getItem,getItems,createItems,deletetems};
