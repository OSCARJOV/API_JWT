const mongoose = require("mongoose");

const NODE_ENV = process.env.NODE_ENV;

const dbConnectNoSql = () => {

    const DB_URI = (NODE_ENV === 'test') ? process.env.DB_URI_TEST : process.env.DB_URI;
    mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    }, 
    (err, res) => { // funcion callback
    if(!err){        
    console.log('*******CONEXION CORRECTA********');
}else{
    console.log('*******ERROR CONEXION********');

}
}
    );
}



module.exports = dbConnectNoSql


// mongodb+srv://oscarorjuelavargas:oscar80173807@cluster0.tzc1m9g.mongodb.net/?retryWrites=true&w=majority