const {Sequelize} = require("sequelize");
const NODE_ENV = process.env.NODE_ENV;

 // VARIABLES DE CONEXION
const database = (NODE_ENV === 'test') ? process.env.MYSQL_DATABASE_TEST : process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(   //Instanciamos la clase que hace la conexion con el dialecto de mysql
    database,
    username,
    password,
    {
        host: host,
        dialect:"mysql",
        
    }
)

    const dbConnectMySql = async () => {  // Funcion que hace la conexion a la BD
        try {
            await sequelize.authenticate();
            console.log("MYSQL CONEXION EXITOSA");
        } catch (error) {
            console.log("MYSQL ERROR DE CONEXION", error);
        }
    }


    module.exports = { sequelize, dbConnectMySql}
