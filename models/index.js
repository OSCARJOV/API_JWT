const ENGINE_DB = process.env.ENGINE_DB;

const pathModels = ENGINE_DB === "nosql" ? "./nosql" : "./mysql";



const models = {    //ESTO SE HACE PARA CONECTAR LA BASE DE DATOS

    userModel: require(`${pathModels}/users`),
    tracksModel: require(`${pathModels}/tracks`),
    storageModel: require(`${pathModels}/storage`),
    
  // userModel: require("./mysql/users"),
  // tracksModel: require("./mysql/tracks"),
  //  storageModel: require("./mysql/storage"),
};

module.exports = models;