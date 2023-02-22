const models = {    //ESTO SE HACE PARA CONECTAR LA BASE DE DATOS

    userModel: require('./nosql/users'),
    tracksModel: require('./nosql/tracks'),
    storageModel: require('./nosql/storage'),

}

module.exports = models